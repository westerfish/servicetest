// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
console.log('Inside server.js');
//Connect to MongoDB using the url in db.js
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
console.log('after connect to DB');
  var func = require('./app/routes');
  console.log('before function call');
  func(app, database);
//  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
