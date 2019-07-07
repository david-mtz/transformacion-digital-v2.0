var Twit = require('twit')
const MAX_COUNT = 200;

var client = new Twit({
  consumer_key:         'nQFytokbwR8p9BoTkKbR0vC6Q',
  consumer_secret:      '2lm9RoybgRfHE6kKbrQ6hjW5QuuYtov2dygwIUgS6TdzlPKfpj',
  access_token:         '949309590080016384-fzM3E1w3fjpW7o06ZwERCe2Pdx9QpAz',
  access_token_secret:  'OLreHtGSxVsD5nP1Lxf6Uq8yQHEyMgLlaqJmYr4SyX3gI',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


const getTweets = (user) => {
    var tweets = [];
    client.get('statuses/user_timeline', { screen_name: user, include_rts: false, exclude_replies: true, count: MAX_COUNT },  function (err, data, response) {
        if (!err) {
            console.log(data);
            tweets = data;
        }
        return tweets;
    });
};

module.exports = {
    getTweets
  };
  