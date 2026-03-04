declare namespace NodeJS {
  interface Process {
    env: {
      SENTRY_AUTH_TOKEN: string;
      NEXT_PUBLIC_SENTRY_DSN: string;
      NEXT_RUNTIME?: "nodejs" | "edge";
    };
  }
}
