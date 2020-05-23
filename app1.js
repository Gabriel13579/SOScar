const express = require('express');

const app = express();

//banco de dadis 

const mysql = require('mysql');

const connection = mysql.createConnection({
    host    :   'localhost',
    user    :    'joaoone',
    password :   'jv2702015',
   database:    'cadastro',   
 
});

connection.connect(function(err) {
    if (err) {
      console.error('Erro ao conectar com BD: ' + err.stack);
      return;
    }
       
  });

// inserir dados
  connection.query("INSERT INTO user(nome, email) VALUES ('Luz','Luz@gmail.com')",function(err, result){
      if(!err){
          console.log('Usuario cadastrado com sucesso!')
      }else{
        console.log('Usuario não foi cadastrado com sucesso!')
      }
  })

// alterar dados

/*connection.query("UPDATE user SET nome = 'João Victor1' WHERE id = 3",function(err, result){
    if(!err){
        console.log('Usuario alterado com sucesso!')
    }else{
      console.log('Usuario não foi alterado com sucesso!')
    }
})  */

//deletar dados

/*connection.query("DELETE FROM  user  WHERE id = 5",function(err, result){
    if(!err){
        console.log('Usuario deletado com sucesso!')
    }else{
      console.log('Usuario não foi deletado com sucesso!')
    }
})  

/*app.get('/', function(req,res){

 res.sendFile(__dirname + "/src/index.html");   

});

app.listen(3001);*/