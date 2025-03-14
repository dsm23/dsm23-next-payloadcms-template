declare namespace NodeJS {
  interface ProcessEnv {
    readonly MINIO_BUCKET: string;
    readonly MINIO_ENDPOINT: string;
    readonly MINIO_PORT: number;
    readonly MINIO_ACCESS_KEY: string;
    readonly MINIO_SECRET_KEY: string;
  }
}
