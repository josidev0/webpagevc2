module.exports = {
  routes :
         [
           {
             method : "GET",
             path : "/new-visit",
             handler : "new-visit.addVisit",
             config : {
               policies : [],
               middlewares : [],
             },
           },
         ],
};
