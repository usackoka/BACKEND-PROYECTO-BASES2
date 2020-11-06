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
		) As 'Julio_2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 2 
		) As 'Agosto_2019',
		
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre =  B.nombre 
			AND hp.fecha_id_fecha = 3 
		) As 'Septiembre_2019',
		
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 4 
		) As 'Octubre_2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 5 
		) As 'Noviembre_2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 6 
		) As 'Diciembre_2019',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 7
		) As 'Enero_2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 8
		) As 'Febrero_2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 9
		) As 'Marzo_2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 10
		) As 'Abril_2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 11
		) As 'Mayo_2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 12
		) As 'Junio_2020',
		(
			SELECT sum(hp.activo) 
			FROM banco b1, hechos_perfil hp , fecha f
			WHERE b1.id_banco  = hp.banco_id_banco
			AND b1.nombre = B.nombre 
			AND hp.fecha_id_fecha = 13
		) As 'Julio_2020'
    FROM [banco] AS B
    GROUP BY B.nombre`
      )
      .then((response) => {
		  //Arreglar la data 
		  let matriz = [
			  [], //Julio 2019
			  [], //Agosto 2019
			  [], //Septiembre 2019
			  [], //Octubre 2019
			  [], //Noviembre 2019
			  [], //Diciembre 2019
			  [], //Enero 2020
			  [], //Febrero 2020
			  [], //Marzo 2020
			  [], //Abril 2020
			  [], //Mayo 2020
			  [], //Junio 2020
			  [], //Julio 2020
			  
			 ];
		  response.recordsets[0].forEach(banco => {
			 //console.log('Info por banco: ',banco.Banco,'Julio 2019', banco.Julio_2019)
				matriz[0].push(banco.Julio_2019);
				matriz[1].push(banco.Agosto_2019);
				matriz[2].push(banco.Septiembre_2019);
				matriz[3].push(banco.Octubre_2019);
				matriz[4].push(banco.Noviembre_2019);
				matriz[5].push(banco.Diciembre_2019);
				matriz[6].push(banco.Enero_2020);
				matriz[7].push(banco.Febrero_2020);
				matriz[8].push(banco.Marzo_2020);
				matriz[9].push(banco.Abril_2020);
				matriz[10].push(banco.Mayo_2020);
				matriz[11].push(banco.Junio_2020);
				matriz[12].push(banco.Julio_2020);
		  });
		  matriz.forEach(mes => {
			mes.sort( (a,b) => b-a);//ordenar los meses descendentemente
		  });

		  console.log(matriz);
		  let bancos = [];
		  //ahora retornar un nuevo objeto dependiendo de la posición que tienen en la matriz ya arreglada
		  for (let index = 0; index < response.recordsets[0].length; index++) {
			  const banco = response.recordsets[0][index];
			  bancos.push({
				"Banco":banco.Banco,
				"Julio_2019": matriz[0].indexOf(banco.Julio_2019) + 1,
				"Agosto_2019": matriz[1].indexOf(banco.Agosto_2019) + 1,
				"Septiembre_2019": matriz[2].indexOf(banco.Septiembre_2019) + 1,
				"Octubre_2019": matriz[3].indexOf(banco.Octubre_2019) + 1,
				"Noviembre_2019": matriz[4].indexOf(banco.Noviembre_2019) + 1,
				"Diciembre_2019": matriz[5].indexOf(banco.Diciembre_2019) + 1,
				"Enero_2020": matriz[6].indexOf(banco.Enero_2020) + 1,
				"Febrero_2020": matriz[7].indexOf(banco.Febrero_2020) + 1,
				"Marzo_2020": matriz[8].indexOf(banco.Marzo_2020) + 1,
				"Abril_2020": matriz[9].indexOf(banco.Abril_2020) + 1,
				"Mayo_2020": matriz[10].indexOf(banco.Mayo_2020) + 1,
				"Junio_2020": matriz[11].indexOf(banco.Junio_2020) + 1,
				"Julio_2020": matriz[12].indexOf(banco.Julio_2020) + 1
			});	  
		  }
			
		  
		console.log(bancos);
        res.status(200).send({ valid: true, info: bancos });
      })
      .catch((error) => {
        res.status(500).send({ valid: false });
      });
  },
};
