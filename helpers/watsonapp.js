const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');

const personalityInsights = new PersonalityInsightsV3({
    version: '2017-10-13',
    iam_apikey: 'VZ7H2Vbb1I02kfTTHbJXpLcGtpiZiwzxtvXikyXimmPw',
    url: 'https://gateway.watsonplatform.net/personality-insights/api'
});

const getPersonality = (listText, success) => {
    // console.log(JSON.stringify(listText));
    const profileParams = {
        content_type: 'text/plain',
        content: JSON.stringify(listText),
        consumption_preferences: true,
        raw_scores: true,
    };
      
    personalityInsights.profile(profileParams)
      
    .then(profile => {
        success(profile);
    })
    .catch(err => {
        console.log(err);
    });
}

const parseTweetToContent = (tweet) => {
    return {
        language: tweet.lang,
        contenttype: 'text/plain',
        content: tweet.text.replace('[^(\\x20-\\x7F)]*',''),
        created: Date.parse(tweet.created_at),
    }
}

const tweetsToProfile = (listTweets, success) => {
    parseTweets = [];

    Object.keys(listTweets).map(function(key, index) {
        parseTweets.push(parseTweetToContent(listTweets[key]));
    });

    return getPersonality(parseTweets, success);
};
 

module.exports = {
    tweetsToProfile
};
