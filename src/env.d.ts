declare namespace NodeJS {
  interface ProcessEnv {
    readonly ANALYZE?: string;
    readonly MINIO_BUCKET?: string;
    readonly MINIO_ENDPOINT?: string;
    readonly MINIO_PORT?: number;
    readonly MINIO_ACCESS_KEY?: string;
    readonly MINIO_SECRET_KEY?: string;
    readonly SMTP_ADMIN_EMAIL?: string;
    readonly SMTP_HOST?: string;
    readonly SMTP_PORT?: string;
    readonly SMTP_USER?: string;
    readonly SMTP_PASS?: string;
    readonly SMTP_SENDER_NAME?: string;
  }
}
