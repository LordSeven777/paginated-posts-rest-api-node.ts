import { Sequelize, QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
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
        photoURL: DataTypes.STRING(250),
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false
        }
      }
    );
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('Post');
  }
};
