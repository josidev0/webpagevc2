module.exports = {
  docsQuery: {
    fields: ["id", "title"],
    populate: {
      document: {
        fields: ["id", "name", "url", "ext"],
      },
    },
  },
  menuQuery: {
    fields: ["id", "title", "url"],
    populate: {
      subMenus: {
        fields: [
          "id",
          "title",
          "url",
          "description",
          "isExternal",
          "externalURL",
        ],
      },
    },
  },
};
