const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const views_dir = '/views/';

const twitterHelper = require('./helpers/twitterapp');
const personalityHelper = require('./helpers/watsonapp');


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => { 
    //res.sendFile(path.join(__dirname + views_dir + 'index.html'));
});

app.get('/twitter', (req, res) => {
});




app.listen(port, () => console.log(`App listening on port ${port}!`))
