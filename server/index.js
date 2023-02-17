const express = require("express");
const path = require("path");
const controller = require('./controller')

const app = express();
app.use(express.json());

app.get('/user', controller.getUser);
// app.post('/user', controller.postUser);

// app.get('/login', (req, res) => {
//   res.send('login')
// })
app.use(express.static('client/dist'));
app.listen(3000);



