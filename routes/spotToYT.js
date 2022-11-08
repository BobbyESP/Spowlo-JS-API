const express = require("express");
const SpotifyToYoutubeMusic = require("spotify-to-ytmusic");
const dotenv = require("dotenv");
// Setup the router for express
const router = express.Router();

//get CLIENT_ID from dotenv
dotenv.config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

router.get("/", [], (req, res) => {
  async function convertSpotToYT(url) {
    // Set Spotify Credentials

    const spotifyToYoutubeMusic = await SpotifyToYoutubeMusic({
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      ytMusicUrl: true, // Optional
    });

    // Convert a Spotify Track
    let song = await spotifyToYoutubeMusic(url);

    return song;
  }

  convertSpotToYT((url = req.query.song))
    //get song from convertSpotToYT function
    .then((song) => {
      res.send({
        result: song,
      });
    });
});

// Export the router
module.exports = router;
