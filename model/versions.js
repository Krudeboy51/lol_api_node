var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var VersionScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    unique: true
  },
  version: {
    type: String,
    required: true,
    minlength: 4
  },
  version: {
    type: String,
    required: true,
    minlength: 4
  },
  last_updateed: {
    type: Date,
    required: true,
    default: Date.now
  }
});

VersionScheme.methods.findByName = function (name) {
  var version = this;

  return version.findOne({
    name
  }).then((version) => {
    if(!version){
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      if(name = version.name){
        resolve(version);
      }else{
        reject();
      }
    })
  })
}

var Version = mongoose.model('Version', VersionScheme);

module.exports = {Version}
