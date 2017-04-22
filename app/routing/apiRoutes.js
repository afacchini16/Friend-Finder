var friendsData = require("../data/friends");

module.exports = function(app) {
    // Will get and diplay all possible friends in JSON format
    app.get("/api/friends", function(request, response) {
        response.json(friendsData);
        
    });
    // Will handle and update the incoming survey results
    app.post("/api/friends", function(request, response) {
            friendsData.push(request.body);
            response.json(true);
    });
};