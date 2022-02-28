module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define()(
    "Hashtag",
    {
      name: { type: DataTypes.STRING(100), allowNull: true },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4+general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};
