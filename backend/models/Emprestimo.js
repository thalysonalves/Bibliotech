const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Emprestimo = sequelize.define('emprestimos', {
    livro: DataTypes.STRING,
    tombo: DataTypes.INTEGER,
    aluno: DataTypes.STRING,
    turma: DataTypes.STRING,
    status: DataTypes.BOOLEAN
});

module.exports = Emprestimo;