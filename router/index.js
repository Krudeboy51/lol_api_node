module.exports = function (app) {
    app.use('/champion', require('./routes/Champion'));
};
