import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const AuthS = sequelize.define(
  "auths",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
   
  },
  {
    timestamps: false,
  }
);
