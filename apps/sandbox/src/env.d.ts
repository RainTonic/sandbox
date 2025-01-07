interface ImportMeta {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
   */
  readonly NG_APP_ENV: string;
  // Add your environment variables below
  NG_APP_API: string;
  // readonly NG_APP_API_URL: string;
  [key: string]: unknown;
}
