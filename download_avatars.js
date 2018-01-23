var request = require('request');
var secrets = require("./secrets");

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
        headers: {
            'User-Agent': 'jorgelduarte'
        },
    };

    request(options, function(err, res, body) {
        cb(err, body);
    });
}

getRepoContributors("jquery", "jquery", function(err, result) {
    if (err) {
        console.error("Error:", err);
    }
    var users = JSON.parse(result);
    users.forEach(user => {
       console.log(user.avatar_url) 
    });
});