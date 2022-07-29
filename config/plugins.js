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
  // upload: {
  //   config: {
  //     provider: "strapi-provider-upload-sftp-v2",
  //     providerOptions: {
  //       host: env("SFTP_HOST", "vinculacion.espoch.edu.ec"),
  //       port: env.int("SFTP_PORT", 21),
  //       user: env("SFTP_USER", "vincftp"),
  //       password: env("SFTP_PASSWORD", "Esp0chV1nc"),
  //       basePath: env("SFTP_BASEPATH", "/"),
  //       baseUrl: env("ASSET_URL", "http://vinculacion.espoch.edu.ec/"),
  //     },
  //   },
  // },
});
