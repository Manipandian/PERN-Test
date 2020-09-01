const express = require('express');
const knex = require('knex');

const app = express();

var db = require('knex')({
    client: 'pg',
    connection: {
        connectionString : process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
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


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
};
app.listen(port, () => console.log("App run at port 3001"));