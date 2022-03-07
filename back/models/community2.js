const Sequelize = require("sequelize");
module.exports = class Community2 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        price: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        sharedPrice: {
          //개인부담액
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        modelName: "Community2",
        tableName: "communities2",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.Post);
  }
};
