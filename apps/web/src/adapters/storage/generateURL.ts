import path from "node:path";
import type { GenerateURL } from "@payloadcms/plugin-cloud-storage/types";
import type * as Minio from "minio";

interface Args {
  bucket: string;
  config: Minio.ClientOptions;
}

export const getGenerateURL =
  ({ bucket, config: { endPoint } }: Args): GenerateURL =>
  ({ filename, prefix = "" }) => {
    const stringifiedEndpoint =
      // @ts-expect-error endPoint is probably a string
      typeof endPoint === "string" ? endPoint : endPoint.toString();
    return `${stringifiedEndpoint}/${bucket}/${path.posix.join(prefix, filename)}`;
  };
