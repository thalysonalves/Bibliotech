const express = require('express');
const EmprestimoController = require('../Controller/EmprestimoController');
const routes = express.Router();

// Rotas
    // Home page
    routes.get('/', function(req, res){
        res.send('Home page')
    });
    // Rota para formulário de cadastro de empréstimo
    routes.get('/cad-emprestimo', function(req, res){
        res.render('formulario')
    })
    // Endpoint de envio de dados
    routes.post('/add-emprestimo', EmprestimoController.store, function(req, res){
        res.render('formulario')
    })
    // Rota de mostar os emprestimos
    routes.get('/show-emp', EmprestimoController.index)

module.exports = routes;