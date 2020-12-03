const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'lojaVirtual'
});

connection.connect(function(err) {
    if (err) 
      console.log('BD -> ERRO!')
    else
      console.log('BD -> SUCESSO!');
});

module.exports = connection;

