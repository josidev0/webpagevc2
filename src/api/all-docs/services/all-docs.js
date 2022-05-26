"use strict";

const { docsQuery } = require("../../../../utils/query");
const { DocsReducedData } = require("../../../../utils/reduced-data");

/**
 * all-docs service.
 */

module.exports = {
  allDocs: async () => {
    try {
      const projects = await strapi.entityService.findMany(
        "api::proyecto.proyecto",
        docsQuery
      );
      const externalBudget = await strapi.entityService.findMany(
        "api::ejecucion-presupuesto-externo.ejecucion-presupuesto-externo",
        docsQuery
      );
      const informesSeguimiento = await strapi.entityService.findMany(
        "api::informe-seguimiento-a-socializacion.informe-seguimiento-a-socializacion",
        docsQuery
      );
      const formatos = await strapi.entityService.findMany(
        "api::formato.formato",
        docsQuery
      );
      const marcoLegal = await strapi.entityService.findMany(
        "api::marco-legal.marco-legal",
        docsQuery
      );
      const conveniosInterinstitucionales = await strapi.entityService.findMany(
        "api::convenio-interinstitucional.convenio-interinstitucional",
        docsQuery
      );
      const formatosConvenios = await strapi.entityService.findMany(
        "api::formato-convenio.formato-convenio",
        docsQuery
      );
      const educacionContinua = await strapi.entityService.findMany(
        "api::educacion-continua.educacion-continua",
        docsQuery
      );
      const practicasPreprofesionales = await strapi.entityService.findMany(
        "api::practica-preprofesional.practica-preprofesional",
        docsQuery
      );

      return DocsReducedData(projects).concat(
        externalBudget,
        informesSeguimiento,
        formatos,
        marcoLegal,
        conveniosInterinstitucionales,
        formatosConvenios,
        educacionContinua,
        practicasPreprofesionales
      );
    } catch (err) {
      return err;
    }
  },
};
