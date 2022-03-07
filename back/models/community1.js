const Sequelize = require("sequelize");
module.exports = class Community1 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        rentalPrice: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        modelName: "Community1",
        tableName: "communities1",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Community1.belongsTo(db.Post);
  }
};
