module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-docs",
      handler: "all-docs.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
