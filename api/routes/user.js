'use strict';
const express = require('express');
const router = express.Router();
const UserController = require(`${__dirname}/../controllers/UserController`);
const Err            = require(`${__dirname}/../../lib/error`);
const getToken = require(`${__dirname}/../../lib/hash`).token;
const userController = new UserController();


/* GET user listing. */
router.get('/', (req, res, next) => {

  userController.find(( err, users ) => {
    if(err) return res.json( err) ;

    return res.json( users );
  });

});

router.get('/connectwith', (req, res, next) => {
  userController.connectwith((err, users) => {
    if(err) return res.json( err );
    return res.json( users );
  });
});

router.get('/status-user', (req, res, next) => {
  userController.statusUser((err, usersStatus) => {
    if(err || !usersStatus) return res.json( err );
    return res.json( usersStatus );
  });
});

router.get('/logout', (req, res, next) => {
     delete req.session.Admin;
     res.json({
       status:"ok"
     });
});


module.exports = router;
