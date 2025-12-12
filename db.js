const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: 'Pavani@123', 
  database: 'react_db',
  port: 3307,
});


// const db = mysql.createPool({
//   host: 'localhost', 
//   user: 'root', 
//   password: 'ksk@1005', 
//   database: 'react_db',
//   port: 3306,
// });

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release();
});

module.exports = db;


