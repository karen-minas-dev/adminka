'use strict';
const express = require('express');
const app = module.exports = express();
const router = express.Router();
const UserController = require(`${__dirname}/controllers/UserController`);

app.post('/login', (req, res, next) => {
  const userController = new UserController();
  userController.login(req.body, (err, admin) => {

    if(err) return res.status(401).json( err );
    req.session.Admin = admin;
    return res.json( {admin:admin,status:"ok"} );
  });
});


app.use('*', (req, res, next) => {
  if (req.session.Admin) {
      next();
  } else {
    return res.json({status: 'error',message: 'no session'});
  }
});

app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
