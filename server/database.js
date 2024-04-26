const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jomv'
  });
  // connect to the MySQL database
  connection.connect((error) => {
    if (error) {
       console.error('Error connecting to MySQL database:', error);
    } else {
       console.log('Connected to MySQL database!');
    }
});
  
module.exports = connection


