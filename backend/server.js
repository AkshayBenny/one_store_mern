const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();

app.post('./login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '716c5b75beaa4677a08dcb2f0f7f062b',
    clientSecret: 'dcb17e90097543b286380489914fbb35',
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    }); 
});



app.listen(3001)
