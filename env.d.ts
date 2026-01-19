/// <reference types="@cloudflare/workers-types" />

interface CloudflareEnv {
  DB: D1Database;
}

declare module "@cloudflare/next-on-pages" {
  export function getRequestContext(): {
    env: CloudflareEnv;
    ctx: ExecutionContext;
    cf: IncomingRequestCfProperties;
  };
}

declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY?: string;
    CONTACT_NOTIFICATION_EMAIL?: string;
    CONTACT_FROM_EMAIL?: string;
  }
}
