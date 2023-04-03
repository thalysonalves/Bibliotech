const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const routes = require('./routes/routes');

//Config
    //Handlebars
    app.engine('handlebars', engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }));
    app.set('view engine', 'handlebars')
    //Body Parser no Express
    app.use(express.urlencoded({extended: false}))
    // Usando rotas
    app.use(routes)

app.listen(5000, function(req, res){
    console.log("Servidor ligado");
})