const Sequelize = require("sequelize");
module.exports = class Community4 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        price: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        discountPrice: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        modelName: "Community4",
        tableName: "communities4",
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
