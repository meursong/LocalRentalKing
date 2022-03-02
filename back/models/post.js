const Sequelize = require("sequelize");
module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING(100),
          allowNull: true, //
        },
        whichCummunity: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        Category: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
      },
      {
        modelName: "Post",
        tableName: "posts",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Post.hasMany(db.Image);
    db.Post.hasMany(db.Comment);
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.User, { through: "Like" });
  }
};
