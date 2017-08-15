var orm = require("../config/orm.js");

var burgers = {
  addBurger: function(nameInput, cb){
    orm.insertOne("burgers")
  }
}
