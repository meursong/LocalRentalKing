module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define()(
    "Comment",
    {
      content: { type: DataTypes.STRING(100), allowNull: true },
    },
    {
      modelName: "Comment",
      tableName: "comments",
      charset: "utf8mb4",
      collate: "utf8mb4+general_ci", //한글저장
      sequelize,
    }
  );
  User.associate = (db) => {};
  return User;
};
