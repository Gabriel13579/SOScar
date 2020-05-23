const express = require('express');
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const moment = require('moment')
const Pagamento = require("./modules/Pagamento")

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine','handlebars')

app.use(bodyParser.urlencoded({ extended: false}))
 
//paser application/json

app.use(bodyParser.json())


//Rotas
app.get('/pagamento',function(req, res){
    Pagamento.findAll().then(function(pagamentos){
        res.render('pagamento',{pagamentos: pagamentos});
    })
});

app.get('/cad-pagamentos',function(req, res){
    res.render('cad-pagamentos');
});


app.post('/add-pagamento', function(req,res){
    Pagamento.create({
        id:   req.body.id,
        Name: req.body.Name,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/pagamento');

        //res.alert("Pagamento cadastrado com sucesso")
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi cadastrado com sucesso")
    })

    //imprimir na pagina add-pagamento res.send("Nome: " +  req.body.Name + "<br>Valor: " + req.body.valor + "<br>") 


});

app.get('/del-pagamento/:id', function(req, res){
    Pagamento.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/pagamento');
        //res.send("Pagamento apagado com sucesso")
    }).catch(function(erro){
        res.send("Erro:Pagamento não foi apagado com sucesso")
    })
})

app.listen(3001);