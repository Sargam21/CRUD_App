var express = require('express');
var server = express();
var routes = require('./routes/routes');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');
const cors = require('cors');

/*mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true,  useUnifiedTopology: false }, function checkDB(error){
  if(error){
    console.log("error")
  }
  else{
    console.log("DB connectedd..!!")
  }
});


server.use(express.json());
*/
const uri = "mongodb://127.0.0.1:27017/est";
mongoose
  .connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


server.use(routes);
server.use(cors());
server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(8000,function check(error){
    if(error){
        console.log("errrorrr")
    }
    else{
        console.log("Started")
    }
});