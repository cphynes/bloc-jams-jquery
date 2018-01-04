{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
<<<<<<< HEAD
        <td>index</td>
        <td>song.title</td>
        <td>song.duration</td>
=======
>>>>>>> checkpoint-12-bloc-jams-jquery-song-list
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          <button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
    `);

    song.element.on('click', event => {
      player.playPause(song);
    });

      $('#song-list').append(song.element);
  });
}
