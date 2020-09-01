const express = require('express');
const knex = require('knex');

const app = express();

var db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
    //   password : 'your_database_password',
      database : 'pern_test'
    }
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/item', (req, res) => {
    db.select('*').table('users')
    .then((data) => {
        console.log(data);
        res.status(200).send(data);
    })
    .catch(err => console.log(err));
})



app.listen(3001, () => console.log("App run at port 3001"));