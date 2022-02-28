module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define()(
    //img는 post에도 있고 user에도 있고하니까 따로 이미지 소스만 관리를 하자
    "Image",
    {
      src: { type: DataTypes.STRING(100), allowNull: true }, //이미지가 저장될 경로
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4+general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};
