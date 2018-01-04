var express = require('express');
var fs = require('fs');
var request = require('request');

//var app = express();
var router = express();

var {Champion} = require('../../model/champion');
var {Version} = require('../../model/versions');

var api_key = 'RGAPI-46c86998-0f47-439e-82a1-3a8acdfab257';

router.get('/update', function(req, res){
  var link = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=all&dataById=false&api_key='+api_key;
  console.log(link);
  var data;
  request(link, (err, res, body) => {

    var data = JSON.parse(body);
    var keys = data.keys;
    var info = data.data;
    console.log(data.version);
    var version = new Version({
      'name' : 'Champion',
      'version' : data.version
    })

    version.save().then((version) => {
      for(var p in keys){
        console.log();
        var cdata = JSON.stringify(data.data[keys[p]]);
        var indata = {
          'name' : keys[p],
          'data' : cdata
        };
        var champ = new Champion(indata);
        champ.save().then((champion) => {

         })
      }
    }).catch ((e) => {
      res.status(400).send(e);
    })

  })
  res.status(200).send();
})

router.get('/get/:name', function(req, res) {
  var name = req.params.name;
  console.log("getting request $name");
  Champion.findByName(name).then ((champion) => {
    console.log("completed");
    res.status(200).send();
  }).catch((e) => {
    res.status(400).send(e);
  })
});

module.exports = router;
