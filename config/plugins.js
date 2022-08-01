module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  upload: {
    provider: "ftp-v2",
    providerOptions: {
      host: env("FTP_HOST"),
      port: env("FTP_PORT"),
      user: env("FTP_USER"),
      password: env("FTP_PASSWORD"),
      basePath: env("FTP_BASEPATH"),
      baseUrl: env("FTP_BASEURL"),
    },
  },
});
