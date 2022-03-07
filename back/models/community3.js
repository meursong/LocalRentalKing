const Sequelize = require("sequelize");
module.exports = class Community3 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sharedPrice: {
          //개인부담액
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        modelName: "Community3",
        tableName: "communities3",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Community3.belongsTo(db.Post);
  }
};
