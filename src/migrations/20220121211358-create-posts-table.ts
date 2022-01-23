import { Sequelize, QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable(
      'Post',
      {
        postId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: DataTypes.STRING(100),
        content: DataTypes.TEXT,
        photoURL: DataTypes.STRING(250)
      }
    );
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('Post');
  }
};
