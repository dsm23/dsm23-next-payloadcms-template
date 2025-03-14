import fs from "node:fs";
import path from "node:path";
import type { CollectionConfig } from "payload";
import type { HandleUpload } from "@payloadcms/plugin-cloud-storage/types";
import type * as Minio from "minio";

interface Args {
  acl?: "private" | "public-read";
  bucket: string;
  collection: CollectionConfig;
  getStorageClient: () => Minio.Client;
  prefix?: string;
}

const multipartThreshold = 1024 * 1024 * 50; // 50MB

export const getHandleUpload = ({
  // acl,
  bucket,
  getStorageClient,
  prefix = "",
}: Args): HandleUpload => {
  return async ({ data, file }) => {
    const fileKey = path.posix.join(data.prefix || prefix, file.filename);

    const fileBufferOrStream = file.tempFilePath
      ? fs.createReadStream(file.tempFilePath)
      : file.buffer;

    if (!(await getStorageClient().bucketExists(bucket))) {
      await getStorageClient().makeBucket(bucket);
    }

    if (file.buffer.length > 0 && file.buffer.length < multipartThreshold) {
      await getStorageClient().putObject(
        bucket,
        fileKey,
        fileBufferOrStream,
        undefined,
        {
          "Content-Type": file.mimeType,
        },
      );
      // {
      //   ACL: acl,
      //   Body: fileBufferOrStream,
      //   Bucket: bucket,
      //   ContentType: file.mimeType,
      //   Key: fileKey,
      // })

      return data;
    }

    // const parallelUploadS3 = new Upload({
    //   client: getStorageClient(),
    //   params: {
    //     ACL: acl,
    //     Body: fileBufferOrStream,
    //     Bucket: bucket,
    //     ContentType: file.mimeType,
    //     Key: fileKey,
    //   },
    //   partSize: multipartThreshold,
    //   queueSize: 4,
    // });

    // await parallelUploadS3.done();

    // return data;
  };
};
