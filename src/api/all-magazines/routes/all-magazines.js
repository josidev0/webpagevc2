module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-magazines",
      handler: "all-magazines.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
