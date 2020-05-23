const Sequelize =  require('sequelize');

const sequelize = new Sequelize('cadastro2','joaoone','jv2702015', {
    host: 'localhost',
    dialect: 'mysql'

});


sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Conexão realizada com sucesso'+ err );
});

const Pagamento = sequelize.define('pagamento', {
    // attributes
    Name: {
      type: Sequelize.STRING,
      
    },
    valor: {
      type: Sequelize.DOUBLE
      
    }
    });

    //Criar tabele com Sequelize
    //Pagamento.sync({force: true});

    //inserir regitros no BD
    Pagamento.create({
        Name: "Energia",
        valor: 320
    })

