module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "vinculacion.espoch.edu.ec"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "c7Vinculacion"),
      user: env("DATABASE_USERNAME", "c7vinc"),
      password: env("DATABASE_PASSWORD", "Esp0chV1nc"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
