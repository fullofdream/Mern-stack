const express = require('express');
const app = express();
const bodyParser=require('body-parser');

require('dotenv').config();

const morgan = require('morgan');
const helmet=  require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

// Routes
const Logs=require('./api/logs');



const middlewares=require('./middlewares');

// connecting to MongDB
mongoose.connect(process.env.DB_URL,
 {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 .then(() => console.log('------MongoDB Connected-----'))
 .catch(err => console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


// morgan & helmet middleware to log the incoming request ot the server and Security Headers in response from the server.
app.use(morgan('combined'));
// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
app.use(helmet());


// cors middleware
app.use(cors({
  origin:process.env.CORS_ORIGIN,
})); // if origin & options not mentioned  it sets by default the ACCESS-ALLOW-CONTROL-ORIGIN to * i.e anyone can make request to the server.


app.get('/',(req,res)=>{
  res.json(
    {
      message:'Hello Sweety!'
    }
  );
});

// Routes

app.use('/api/logs',Logs);

// not found middleware if the route requested by the user do not exist.
app.use(middlewares.notFound);

// Actual error handler for generalized error if request to routed url cause some error.
app.use(middlewares.errorHandler);

app.listen( PORT , process.env.IP , ()=>{
  console.log(`Server Started at Port: ${PORT}`);
});
