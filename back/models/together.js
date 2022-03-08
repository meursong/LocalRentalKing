const Sequelize = require("sequelize");
module.exports = class Together extends Sequelize.Model {
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
        modelName: "Together",
        tableName: "togethers",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        timestamps: false,
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Together.belongsTo(db.Post);
  }
};
