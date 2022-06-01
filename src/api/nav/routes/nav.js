module.exports = {
  routes: [
    {
      method: "GET",
      path: "/nav",
      handler: "nav.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
