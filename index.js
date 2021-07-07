const express = require('express'); // imports express
const playlistController = require('./controllers/playlistController');

const app = express(); // it gives us access to express

// app.use runs middlewares for the endpoints below it
// a middleware is a function that runs before our req and res functions (controller/handler)
// this middleware parses the request and creates req.body
app.use(express.json()); 

app.get('/api/playlist', playlistController.getPlaylist); // sends back the playlist
app.post('/api/playlist', playlistController.addSong); // adds a song to the playlist
app.put('/api/playlist/:id', playlistController.editSong); // updates the title of a song on the playlist
app.delete('/api/playlist/:id', playlistController.deleteSong);

app.listen(5050, () => console.log('Listening on Port 5050')); // starts our server and lets us know it was started