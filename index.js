const twit = require('twit');
const secrets = require('./secrets.js');

var T = new twit(secrets);

tweet = 'hi hello';

T.post('statuses/update', {status: tweet});
