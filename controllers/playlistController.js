const playlist = [
  {
    id: 1,
    title: 'One Headlight',
    artist: 'The Wallflowers',
    album: 'Bringing Down The Horse'
  }
];

let id = 2;

const getPlaylist = (req, res) => {
  res.status(200).send(playlist); // sends back 200 status and playlist array
}

module.exports = { // old way of exporting
  getPlaylist,
  addSong: (req, res) => {
    const { artist, album, title } = req.body;
  
    const newSong = {
      album: req.body.album, // directly referencing the body
      artist: artist, // referencing the destructured value from the body
      title, // shorthand for title: title
      id: id,
    };

    id++;
  
    playlist.push(newSong); // add song to playlist arr
  
    res.status(200).send(playlist); // send back a 200 status and newly updated playlist
  },
  editSong: (req, res) => {
    // resources/(request)
    const { title } = req.body;
    const { id } = req.params;

    // Approach 1 for finding index based on ID
    // let index = -1;
    // for (let i = 0; i < playlist.length; i++) {
    //   if(playlist[i].id === +id) {
    //     index = index;
    //   }
    // }

    // Approach 2 for finding index based on ID
    const index = playlist.findIndex((element) => element.id === +id)

    // logic
    playlist[index].title = title;
    // response
    res.status(200).send(playlist);
  },
  deleteSong: (req, res) => {
    const { id } = req.params;

    const index = playlist.findIndex((element) => element.id === +id);

    playlist.splice(index, 1);

    res.status(200).send(playlist);
  }
};