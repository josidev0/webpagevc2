"use strict";

const { docsQuery } = require("../../../../utils/query");
const { DocsReducedData } = require("../../../../utils/reduced-data");

/**
 * all-docs service.
 */

module.exports = {
  allDocs: async () => {
    try {
      const marcoLegal = await strapi.entityService.findMany(
        "api::marco-legal.marco-legal",
        docsQuery
      );
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

      const resolucionAprobaciones = await strapi.entityService.findMany(
        "api::resolucion-aprobacion.resolucion-aprobacion",
        docsQuery
      );

      const informesCapacitacion = await strapi.entityService.findMany(
        "api::informe-programa-capacitacion.informe-programa-capacitacion",
        docsQuery
      );
      const gestion = await strapi.entityService.findMany(
        "api::informe-y-reporte-de-gestion.informe-y-reporte-de-gestion",
        docsQuery
      );
      const comercioJusto = await strapi.entityService.findMany(
        "api::comercio-justo.comercio-justo",
        docsQuery
      );
      const auditorio = await strapi.entityService.findMany(
        "api::auditorio.auditorio",
        docsQuery
      );
      const informesInsercion = await strapi.entityService.findMany(
        "api::infomes-de-insercion-laboral.infomes-de-insercion-laboral",
        docsQuery
      );
      const cursos = await strapi.entityService.findMany(
        "api::curso-fortalecimiento-profesional.curso-fortalecimiento-profesional",
        docsQuery
      );
      const informes = await strapi.entityService.findMany(
        "api::informe-de-seguimiento-a-graduados.informe-de-seguimiento-a-graduados",
        docsQuery
      );
      const formatosSeg = await strapi.entityService.findMany(
        "api::formato-de-seguimieto-a-graduados.formato-de-seguimieto-a-graduados",
        docsQuery
      );
      const encuentros = await strapi.entityService.findMany(
        "api::encuentro-de-graduados.encuentro-de-graduados",
        docsQuery
      );
      return DocsReducedData(marcoLegal).concat(
        projects,
        formatos,
        externalBudget,
        informesSeguimiento,
        resolucionAprobaciones,
        conveniosInterinstitucionales,
        formatosConvenios,
        educacionContinua,
        informesCapacitacion,
        practicasPreprofesionales,
        gestion,
        comercioJusto,
        auditorio,
        informesInsercion,
        cursos,
        informes,
        formatosSeg,
        encuentros
      );
    } catch (err) {
      return err;
    }
  },
};
