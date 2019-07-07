const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');

const personalityInsights = new PersonalityInsightsV3({
    version: '2017-10-13',
    iam_apikey: 'VZ7H2Vbb1I02kfTTHbJXpLcGtpiZiwzxtvXikyXimmPw',
    url: 'https://gateway.watsonplatform.net/personality-insights/api'
});

const getPersonality = (listText) => {
    const profileParams = {
        // Get the content from the JSON file.
        content_items: listText,
        content_type: 'text/plain',
        consumption_preferences: true,
        raw_scores: true,
        content_language: 'es'
      };
      
    personalityInsights.profile(profileParams)
      
          .then(profile => {
          return profile;
        })
        .catch(err => {
          return {};
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

const tweetsToProfile = (listTweets) => {
    return getPersonality(listTweets.map(parseTweetToContent));
};
  

module.exports = {
    tweetsToProfile
};
