const Sequelize = require("sequelize");
module.exports = class PowerPostImage extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        src: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        modelName: "PowerPostImage",
        tableName: "powerPostImages",
        charset: "utf8mb4", //한글도 쓸수있게
        collate: "utf8mb4_general_ci", //한글 저장
        timestamps: false,
        sequelize,
      }
    );
  }
  static associate(db) {
    db.PowerPostImage.belongsTo(db.PowerPost, {
      onDelete: "CASCADE",
    });
  }
};
