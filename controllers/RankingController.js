import sql from "mssql";
import sqlConfig from "./sql.config.js";

export default {
  listRanking: async (req, res, next) => {
    let request = await sql.connect(sqlConfig.configSQLServer).then((pool) => {
      return pool.request();
    });

    await request
      .query(
        `SELECT B.nombre as Banco, 
	   (
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 1 
		) As 'Julio 2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 2 
		) As 'Agosto 2019',
		
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre =  B.nombre 
			AND hp.fecha_id_fecha = 3 
		) As 'Septiembre 2019',
		
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 4 
		) As 'Octubre 2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 5 
		) As 'Noviembre 2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 6 
		) As 'Diciembre 2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 7
		) As 'Enero 2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 8
		) As 'Febrero 2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 9
		) As 'Marzo 2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 10
		) As 'Abril 2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 11
		) As 'Mayo 2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 12
		) As 'Junio 2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 13
		) As 'Julio 2020'
    FROM [banco] AS B
    GROUP BY B.nombre`
      )
      .then((response) => {
        res.status(200).send({ valid: true, info: response.recordsets[0] });
      })
      .catch((error) => {
        res.status(500).send({ valid: false });
      });
  },
};
