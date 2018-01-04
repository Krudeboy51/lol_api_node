var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var ChampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  data: {
    type: String,
    required: true,
  }
});

ChampSchema.methods.findByName = function (name) {
  var champ = this;
  console.log("finding by id $name");
  return champ.findOne({
    name
  }).then((champ) => {
    if(!version){
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      if(name = champ.name){
        console.log("found name");
        resolve(champ);
      }else{
        reject();
      };
    });
  });
};

ChampSchema.pre('save', function (next) {
  next();
});

var Champion = mongoose.model('Champion', ChampSchema);

module.exports = {Champion}
