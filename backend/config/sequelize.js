const database = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(database)

sequelize.authenticate().then(function(){
    console.log('Conexão bem sucedida');
}).catch(function(){
    console.log('Conexão mal sucedida');
});

module.exports = sequelize;