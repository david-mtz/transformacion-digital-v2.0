var Twitter = require('twitter');
 
var client = new Twitter({
    consumer_key:         'UKW4rkepE6iv2hq7A4nNZJmaw',
    consumer_secret:      'j1iS62f8UeLVoapcYKef2LGlJY1zqoRmd8kny1tMxRGWhBV5lU',
    access_token_key:     '158606989-bScuD0ezQiVbPFVLUAmctSnEdWvWMenW4G936Luj',
    access_token_secret:  'pTnnRSvmTj8fOV22CybCo3XVwrRnP9UMwwQBXomhwN8tl',
  });

const MAX_COUNT = 200;


const getTweets = (user, success) => {
    var tweets = [];
    client.get('statuses/user_timeline', { screen_name: user, include_rts: false, exclude_replies: true, count: MAX_COUNT })
    .catch(function (err) {
        console.log('caught error', err)
    }).then(function (result) {
        success(result);
    });
};

module.exports = {
    getTweets
  };
  