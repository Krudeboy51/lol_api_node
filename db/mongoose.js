var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://lolapi:password123@ds133557.mlab.com:33557/lolapi');

module.exports = {mongoose};
