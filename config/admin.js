module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "3b3d20f15e86854d52180b4f2a62f700"),
  },
});
