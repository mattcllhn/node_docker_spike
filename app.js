const express = require('express');
const app = express();

const port = 8080;
const host = '0.0.0.0'

app.listen(port,host,()=>{
    console.log(`listening ${host} : ${port}`)
});


app.get('/', (req, res) => {
    res.send('Hello world\n');
  });