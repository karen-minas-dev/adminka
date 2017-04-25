/** @module controllers/UserController */

const User     = require(`${__dirname}/../../schema/user`);
const getHash  = require(`${__dirname}/../../lib/hash`).hash;
const getToken = require(`${__dirname}/../../lib/hash`).token;

class UserController {

  constructor() {
    this.getHash  = getHash;
    this.getToken = getToken;
  }

  find(callback){
    User.find({}, (err, users) => {
     if(err)               return callback( err );
     if(users.length <= 0) return callback({status: 'error',message: 'Users not found'});

     return callback(null, users);
    });
  }

  connectwith(callback){

    var connectGoogle = 0;
    var connectTwitter = 0;
    var connectFacebook = 0;
    var connectApplication = 0;

    this.find((err, users) => {

      if(err) return res.callback( err );

      users.forEach((user) => {
        if(user.facebook_id){
            connectFacebook ++;
          }else if(user.twitter_id){
            connectTwitter ++;
          }else if(user.googel_id){
            connectGoogle ++;
          }else{
            connectApplication ++;
          }
      });
      return callback(null, {
        connectFacebook:connectFacebook,
        connectTwitter:connectTwitter,
        connectGoogle:connectGoogle,
        connectApplication:connectApplication
      });
    })
  }

  statusUser(callback){
    var data = {
      "onlineUsersCount": [],
      "offlineUsersCount":[]
    };

    var onlineUsersCount = [];
    var offlineUsersCount = [];
    this.find( ( err, users ) => {
      if( err ) return res.callback( err );
      var obj;
      users.forEach( ( user ) => {
        if(user.length <= 0){
          data.result;
        }else{
          if(user && user.status_user == "online"){
            if(user.loc){
              obj = {
                latLng: [user.loc[1],user.loc[0]],
                name: user.username
              }
            }else{
             obj = {
                latLng: null,
                name: user.username
              }
            }
            onlineUsersCount.push(obj);
          }else if(user && user.status_user == "offline"){
            if(user.loc){
              obj = {
                latLng: [user.loc[1],user.loc[0]],
                name: user.username
              }
            }else{
             obj = {
                latLng: null,
                name: user.username
              }
            }
            offlineUsersCount.push(obj);
          }
        }

      });
      data.onlineUsersCount = onlineUsersCount;
      data.offlineUsersCount = offlineUsersCount;

      return callback( null, data );
    });
  }

  login(obj, callback){

    let password;
    if(!obj.username) return callback({status: 'error',message: 'Username is required'});
    if(!obj.password) return callback({status: 'error',message: 'Password is required'});
    password = this.getHash(obj.password);

    User.findOne({username:obj.username.toLowerCase()}, (err, user) => {
      if( err ) return callback( {status: 'error',message: 'Users not found'});
      if(!user) return callback({status: 'error',message: 'Users not found'});
      if(user.role != "Admin") return callback({status: 'error',message: 'the user is not an admin'});
      if(user.password != password) return callback({status: 'error',message: 'wrong password'});
      return callback( null, user);
    });
  }
}

module.exports = UserController;
