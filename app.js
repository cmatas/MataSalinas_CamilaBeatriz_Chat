const express = require('express'); // require is like include
const app = express();

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html'); // route to the page
});
// contact page include
app.get('/contact', (req, res)=> {
  res.sendFile(__dirname + '/contact.html'); // route to the page
});
// prtfolio page include
app.get('/portfolio', (req, res)=> { // <-- you need to put the kind of extension
  res.sendFile(__dirname + '/portfolio.html'); // route to the page
});

app.listen(3000, ()=> {
  console.log('listening in port 3000');
});
