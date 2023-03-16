const express = require('express');
const app = express()
const cors = require('cors')
const routes = require('./routes/url-shortner')
const client = require('./db')

var corsOptions ={
  "origin": "*",
  "methods": ["GET","POST"]
}

app.use(cors(corsOptions))
app.use(express.json());

app.use(routes)
client.connect();

client.on('ready', () => {
app.listen(3001,(err)=>{
    if(err){
        console.info('Error on spin up service')
        throw new Error(err)
    }
    console.info('Server running on PORT ',3001)
})
});
client.on('error', (err) => {
    console.error(err);
});

module.exports ={db:client}