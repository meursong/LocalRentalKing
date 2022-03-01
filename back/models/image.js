const Sequelize = require("sequelize");
module.exports = class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        //이미지가 post의 이미지도 있고 user 프로필이미지도있는데 어떻게 구현하지? 각각의 postId나 userId로 찾아들어가면 되는건가?>
        src: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        modelName: "Image",
        tableName: "images",
        charset: "utf8mb4", //한글도 쓸수있게
        collate: "utf8mb4_general_ci", //한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Image.belongsTo(db.Post);
    db.Image.belongsTo(db.User);
  }
};
