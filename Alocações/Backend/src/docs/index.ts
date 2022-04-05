export = require('knex')({
    client : 'mysql', 
    connection : {
        host : 'localhost', 
        user : 'root',
        password : '1234', 
        database : 'alocacoes_tora_transporte'
    }
})
