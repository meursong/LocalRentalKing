const Sequelize = require("sequelize");
module.exports = class Rental extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        rentalPrice: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        modelName: "Rental",
        tableName: "rentals",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        timestamps: false,
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Rental.belongsTo(db.Post);
  }
};
