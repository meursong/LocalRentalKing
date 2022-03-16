const Sequelize = require("sequelize");
module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        user_nickname: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsTo(db.User); //comments 테이블의 로우를 불러올 때 연결된 users 테이블의 로우를 가져온다.
  }
};
