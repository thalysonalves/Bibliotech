'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('emprestimos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      livro: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      tombo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      turms: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emprestimos');
  }
};
