const express = require('express');
const path = require('path');


const app = express();

var db = require('knex')({
    client: 'pg',
    connection: {
        connectionString : process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      }
      // connection: {
      //   host : '127.0.0.1',
      //   user : 'postgres',
      //   // password : 'your_database_password',
      //   database : 'pern_test'
      // }
  });

  // app.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  app.use(express.json());

  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  })
  
// app.get('/', (req,res) => {
//     console.log("Its working");
// })
app.get('/item', (req, res) => {
    db.select('*').table('users')
    .then((data) => {
        console.log(data);
        res.status(200).send(data);
    })
    .catch(err => console.log(err));
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
};
app.listen(port, () => console.log("App run at port 8000"));