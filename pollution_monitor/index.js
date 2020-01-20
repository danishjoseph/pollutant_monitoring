const express = require('express');
var mongo = require('mongodb');
var fs =require('fs')
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://spektrodb:FSYIhIR9HHCu8n99Xhn7xs5OxK8yhNaxGrbw1Mv9DQotxCeKGphY2NwetT0HSESw018YxiMiak7SjUgFxCNQLA%3D%3D@spektrodb.documents.azure.com:10255/?ssl=true";

const router = express.Router();
var cors = require('cors')
var app = express()

app.use(cors())
let mapData ;



MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("database_spektro");
    dbo.collection("Simulated Device").find({}).toArray( function(err, res) {
        if (err) throw err;
        fs.writeFile('map.js',JSON.stringify(res), function (err) {
            if (err) throw err;
            console.log('Saved!');
          }); 
          mapData = res
        console.log(res,"1 document inserted");

      });

    console.log("Database created!");
  //  console.log(db,"fdkbnjfdkjlk")
    db.close();
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

app.get('/pollutantData',(req,res) => {
  
    res.send(mapData);
});

app.post('/login',(req,res) => {
    // req.session.email = req.body.email;
    // var hour=60000
    // req.session.nonce =req.body.nonce;

    // req.session.cookie.expires = new Date(Date.now() + hour)
    console.log("req===>", req.session.id)
    res.end('done');
});

app.get('/admin',(req,res) => {
   console.log(req.session.nonce)
});



app.use('/', router);

app.listen(process.env.PORT || 4000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 4000}`);
});