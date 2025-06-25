import type { Config, Plugin, UploadCollectionSlug } from "payload";
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import * as Minio from "minio";
import type {
  Adapter,
  PluginOptions as CloudStoragePluginOptions,
  CollectionOptions,
  GeneratedAdapter,
} from "@payloadcms/plugin-cloud-storage/types";
import { getGenerateURL } from "./generateURL";
import { getHandleDelete } from "./handleDelete";
import { getHandleUpload } from "./handleUpload";
import { getHandler } from "./staticHandler";

export type S3StorageOptions = {
  /**
   * Access control list for uploaded files.
   */

  acl?: "private" | "public-read";
  /**
   * Bucket name to upload files to.
   *
   * Must follow [AWS S3 bucket naming conventions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   */

  bucket: string;

  /**
   * Collection options to apply the S3 adapter to.
   */
  collections: Partial<
    Record<UploadCollectionSlug, Omit<CollectionOptions, "adapter"> | true>
  >;
  /**
   * AWS S3 client configuration. Highly dependent on your AWS setup.
   *
   * [AWS.S3ClientConfig Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html)
   */
  config: Minio.ClientOptions;

  /**
   * Whether or not to disable local storage
   *
   * @default true
   */
  disableLocalStorage?: boolean;

  /**
   * Whether or not to enable the plugin
   *
   * Default: true
   */
  enabled?: boolean;
};

type S3StoragePlugin = (storageS3Args: S3StorageOptions) => Plugin;

export const minioStorage: S3StoragePlugin =
  (s3StorageOptions: S3StorageOptions) =>
  (incomingConfig: Config): Config => {
    if (s3StorageOptions.enabled === false) {
      return incomingConfig;
    }

    const adapter = s3StorageInternal(s3StorageOptions);

    // Add adapter to each collection option object
    const collectionsWithAdapter: CloudStoragePluginOptions["collections"] =
      Object.entries(s3StorageOptions.collections).reduce<
        Record<string, CollectionOptions>
      >(
        (acc, [slug, collOptions]) => ({
          ...acc,
          [slug]: {
            ...(collOptions === true ? {} : collOptions),
            adapter,
          },
        }),
        {},
      );

    // Set disableLocalStorage: true for collections specified in the plugin options
    const config = {
      ...incomingConfig,
      collections: (incomingConfig.collections || []).map((collection) => {
        // @ts-expect-error collectionsWithAdapter should accept strings
        if (!collectionsWithAdapter[collection.slug]) {
          return collection;
        }

        return {
          ...collection,
          upload: {
            ...(typeof collection.upload === "object" ? collection.upload : {}),
            disableLocalStorage: true,
          },
        };
      }),
    };

    return cloudStoragePlugin({
      collections: collectionsWithAdapter,
    })(config);
  };

function s3StorageInternal({
  acl,
  bucket,
  config = {
    endPoint: "localhost",
  },
}: S3StorageOptions): Adapter {
  return ({ collection, prefix }): GeneratedAdapter => {
    let storageClient: Minio.Client | null = null;
    const getStorageClient: () => Minio.Client = () => {
      if (storageClient) {
        return storageClient;
      }
      storageClient = new Minio.Client(config);
      return storageClient;
    };

    return {
      name: "s3",
      generateURL: getGenerateURL({ bucket, config }),
      handleDelete: getHandleDelete({ bucket, getStorageClient }),
      handleUpload: getHandleUpload({
        acl,
        bucket,
        collection,
        getStorageClient,
        prefix,
      }),
      staticHandler: getHandler({ bucket, collection, getStorageClient }),
    };
  };
}
