let friends = require("../data/friends.js");

// Export API Routes //

module.exports = function (app) {

    // List of friends (GET request) //

    app.get("/api/friends", function (req, res) {

        res.json(friends);

    });

    // Add a new friend (POST request) //

    app.post("/api/friends", function (req, res) {

        // Grab data that user inputted //

        let input = req.body;

        let response = input.scores;

        // Compute compatability //

        let matchName = "";

        let matchImage = "";

        let totalDifference = 10000;

        // Examine existing friends in the list //

        for (let i = 0; i < friends.length; i++) {

            let currentFriend = friends[i];

            console.log(currentFriend);

            // Compute the differences //

            let difference = 0;

            for (let j = 0; j < response.length; j++) {

                console.log("Check type: ", friends[i].scores[j]);

                console.log("Check type: ", response[j]);

                difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(response[j]));

            }


            // If lowest difference, record friend match // 

            console.log("This is total difference", totalDifference);

            console.log("Difference", difference);

            console.log("friends", friends[i]);

            if (difference < totalDifference) {

                totalDifference = difference;

                matchName = friends[i].name;

                matchImage = friends[i].photo;

            }
        }

        console.log("matchName", matchName);

        // Add the new user //

        friends.push(input);

        console.log(matchImage);

        // Send appropriate response //

        res.json(

            {

                status: "OK",

                matchName: matchName,

                matchImage: matchImage

            });

    });

};