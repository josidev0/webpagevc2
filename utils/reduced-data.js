module.exports = {
  DocsReducedData: (data) => {
    // reducing the data to a simple array
    let entriesReduced;
    if (data && Array.isArray(data)) {
      entriesReduced = data.reduce((acc, item) => {
        acc = acc || [];
        acc.push({
          id: item.id,
          title: item.title,
          document: {
            id: item.document?.id,
            name: item.document?.name || "",
            url: item.document?.url || "",
            ext: item.document?.ext || "",
          },
        });
        return acc;
      }, []);

      // returning the reduced data
      return entriesReduced;
    }
  },
  MenuReducedData: (data) => {
    // reducing the data to a simple array
    let entriesReduced;
    if (data && Array.isArray(data)) {
      entriesReduced = data.reduce((acc, item) => {
        acc = acc || [];
        acc.push({
          id: item.id || "",
          title: item.title || "",
          url: item.url || "",
          subMenus: item?.subMenus || [],
        });
        return acc;
      }, []);

      // returning the reduced data
      return entriesReduced;
    }
  },
  SubMenuReducedData: (data) => {
    // reducing the data to a simple array
    let entriesReduced;
    if (data && Array.isArray(data)) {
      entriesReduced = data.reduce((acc, item) => {
        acc = acc || [];
        acc.push({
          id: item.id,
          title: item.title,
          url: item.url,
          isExternal: item.isExternal,
          description: item.description,
          externalURL: item.externalURL,
        });
        return acc;
      }, []);

      // returning the reduced data
      return entriesReduced;
    }
  },
};
