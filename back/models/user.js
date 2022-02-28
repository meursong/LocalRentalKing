const Sequelize = require("sequelize");
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        password: {
          //비번
          type: Sequelize.STRING(100), //암호화를 해야하는데 암호화하면 길이가 길어짐 그래서 100
          allowNull: false, //필수
        },
        location: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        greeting: {
          type: Sequelize.STRING(100),
          allowNull: true, //널가능
        },
        grade: {
          //이거는 회원등급 근데 가입하면 처음에 일반회원임//수정필요---------------------------------------------
          type: Sequelize.STRING(20),
          allowNull: false, //
        },
        profileImgSrc: {
          type: Sequelize.STRING(100),
          allowNull: true, //
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8", //한글도 쓸수있게
        collate: "utf8_general_ci", //한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.Image);
    db.User.belongsToMany(db.Post, { through: "Like" }); //유저가 여러개의 게시물에 좋아요를 누를수있고 한 게시글에 여려명이 좋아요를 누를수있으니까 m:n의 관계이다
    //m:n관계일때는 양쪽의 프라이머리키가 안쪽에 새로운 테이블로 들어가서 포린키가된다.
    //user끼리 서로 좋아요를 누르는 기능도있으니까 셀프조인도 생각해야할듯. 나중에추가?
  }
};
