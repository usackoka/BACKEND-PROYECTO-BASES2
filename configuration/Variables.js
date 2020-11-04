import dotevn from "dotenv";
dotevn.config();

export default {
  //CONFIGURACIÓN PARA SQL SERVER
  configSQLServer: {
    //variable con la configuracion para la base de datos de SQLServer.
    user: process.env.USER_SQL,
    password: process.env.PASSWORD_SQL,
    server: process.env.SERVER_SQL,
    database: process.env.DATABASE_SQL,
    options: {
      enableArithAbort: true,
    },
  },
};
