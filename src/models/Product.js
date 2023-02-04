import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

import { AuthS } from "./Auth.js";

export const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AuthS,
        key: 'id'
      }
    }
  },
  {
    timestamps: true,
  }
);

// // Project.hasMany(Workpackage, {
// //   foreignKey: "projectId",
// //   sourceKey: "id",
// // });

// Product.belongsTo(AuthS, {
//   foreignKey: "userId"
// });

AuthS.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(AuthS, { foreignKey: 'userId' });