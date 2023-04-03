const Emprestimo = require('../models/Emprestimo');
const fs = require('fs')

module.exports = {
    async store(req, res){
        const {livro, tombo, aluno, turma, status} = req.body;
        
    },

    async index(req, res){
        const busca = await Emprestimo.findAll()
        fs.writeFileSync('./busca.json', JSON.stringify(busca, null, 2), 'utf-8')
        return res.json(busca)
    }
}