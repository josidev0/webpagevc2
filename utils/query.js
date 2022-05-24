module.exports = {
  query: {
    fields: ["id", "title"],
    populate: {
      document: {
        fields: ["id", "name", "url", "ext"],
      },
    },
  },
};
