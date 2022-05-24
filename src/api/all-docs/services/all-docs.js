"use strict";

const { query } = require("../../../../utils/query");
const { ReducedData } = require("../../../../utils/reduced-data");

/**
 * all-docs service.
 */

module.exports = {
  allDocs: async () => {
    try {
      const projects = await strapi.entityService.findMany(
        "api::proyecto.proyecto",
        query
      );
      const externalBudget = await strapi.entityService.findMany(
        "api::ejecucion-presupuesto-externo.ejecucion-presupuesto-externo",
        query
      );
      const informesSeguimiento = await strapi.entityService.findMany(
        "api::informe-seguimiento-a-socializacion.informe-seguimiento-a-socializacion",
        query
      );
      const formatos = await strapi.entityService.findMany(
        "api::formato.formato",
        query
      );
      const marcoLegal = await strapi.entityService.findMany(
        "api::marco-legal.marco-legal",
        query
      );
      const conveniosInterinstitucionales = await strapi.entityService.findMany(
        "api::convenio-interinstitucional.convenio-interinstitucional",
        query
      );
      const formatosConvenios = await strapi.entityService.findMany(
        "api::formato-convenio.formato-convenio",
        query
      );
      const educacionContinua = await strapi.entityService.findMany(
        "api::educacion-continua.educacion-continua",
        query
      );
      const practicasPreprofesionales = await strapi.entityService.findMany(
        "api::practica-preprofesional.practica-preprofesional",
        query
      );

      return ReducedData(projects).concat(
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
