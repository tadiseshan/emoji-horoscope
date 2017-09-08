const twit = require('twit');
const secrets = require('./secrets.js');

var T = new twit(secrets);

tweet = 'how bout a horoscope';

T.post('statuses/update', {status: tweet}, function(err, data, response){
  console.log(data);
});
