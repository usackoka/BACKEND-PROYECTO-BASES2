import dotevn from "dotenv";
//leer las constantes del archivo .env
dotevn.config();

export default {
  configSQLServer: {
    //variable con la configuracion para la base de datos de SQLServer.
    user: process.env.USER_SQL,
    password: process.env.PASSWORD_SQL,
    server: process.env.SERVER_SQL,
    database: process.env.DATABASE_SQL,
    connectionTimeout: 300000,
    requestTimeout: 300000,
    options: {
      enableArithAbort: true,
      requestTimeout: 300000,
    },
    pool: {
      idleTimeoutMillis: 300000,
      max: 100,
    },
  },
};
