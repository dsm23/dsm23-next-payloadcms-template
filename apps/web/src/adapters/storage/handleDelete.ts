import path from "node:path";
import type { HandleDelete } from "@payloadcms/plugin-cloud-storage/types";
import type * as Minio from "minio";

interface Args {
  bucket: string;
  getStorageClient: () => Minio.Client;
}

export const getHandleDelete = ({
  bucket,
  getStorageClient,
}: Args): HandleDelete => {
  return async ({ doc: { prefix = "" }, filename }) => {
    await getStorageClient().removeObject(
      bucket,
      path.posix.join(prefix, filename),
    );
  };
};
