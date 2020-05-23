const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos',{
    Name: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})
  
//Criar a Tabela
//Pagamento.sync({force: true})


module.exports = Pagamento