const twit = require('twit');
const secrets = require('./secrets.js');
const emoji = require('node-emoji');
var data = require('../data/categorizedemoji.json')

var T = new twit(secrets);

var food = data["food"];

var sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

tweet = 'hey, ' +sign[Math.floor(Math.random()*sign.length)]+'! feeling stuck? eat some ' + food[Object.keys(food)[Math.floor(Math.random()*Object.keys(food).length)]] + ' and follow the first idea that comes to you';

T.post('statuses/update', { status: tweet }, function(err, data, response){
  console.log(data);
});


