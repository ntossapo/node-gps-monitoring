var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.0.157',
    user     : 'tossapon.gpstracking',
    password : '',
    database : 'gpstracking'
});

module.exports = connection;
