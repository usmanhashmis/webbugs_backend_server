import 'dotenv/config'
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  'webbugs', 'postgres', '4703',
  {
    host: "localhost",
    dialect: "postgres",
  }
);
