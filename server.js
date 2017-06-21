const express = require('express');
const bodyParser = require('body-parser');
var http = require('http');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/',(req, res)=>{
  res.render("home");
})

app.post('/',(req, res)=>{
  console.log(req.body);
  res.render("home",{data:req.body});
})


const serverApp = http.createServer(
   app);

serverApp.listen(3000,()=>{console.log('start server port 3000')});