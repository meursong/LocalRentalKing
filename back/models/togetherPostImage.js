const Sequelize = require("sequelize");
module.exports = class TogetherPostImage extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        src: {
          //이미지 서버에 저장할때 이미지이름으로 저장하면 중복되는 문제가 발생할여지가있으니까 이미지파일의 아이디값을 따서 저장하는 방식으로
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        modelName: "TogetherPostImage",
        tableName: "togetherPostImages",
        charset: "utf8mb4", //한글도 쓸수있게
        collate: "utf8mb4_general_ci", //한글 저장
        timestamps: false,
        sequelize,
      }
    );
  }
  static associate(db) {
    db.TogetherPostImage.belongsTo(db.TogetherPost, {
      onDelete: "CASCADE",
    });
  }
};
