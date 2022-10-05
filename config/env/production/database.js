module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "vinculacion2.espoch.edu.ec"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "c1sitevinc"),
      user: env("DATABASE_USERNAME", "c1uservinc"),
      password: env("DATABASE_PASSWORD", "Esp0chV1nc#"),
      ssl: false,
    },
    debug: false,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "webpagevc"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "q7oGSSea?4@Lg&di"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });
