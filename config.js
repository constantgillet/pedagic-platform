const mysql = require('mysql')
let config;
config = {
    mysql_pool : mysql.createPool({
        host     : 'hede',
        user     : 'hede',
        password : 'hede',
        database : 'hede'
    })
};
module.exports = config;