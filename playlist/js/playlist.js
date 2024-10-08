/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const playlistExists = playlists.some(existingPlaylist => existingPlaylist.name === playlistName);
    if (playlistExists) throw new Error('Playlist already exists');
  
    const newPlaylist = { name: playlistName, songs: [] };
    playlists = [...playlists, newPlaylist];
  };

    /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
    const getAllPlaylists = () => {
      return playlists;
    };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(playlist => playlist.name !== playlistName);
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    if (!playlists.some(playlist => playlist.name === playlistName)) {
      throw new Error('Unable to find playlist');
    }

    playlists = playlists.map(playlist => {
      if (playlist.name !== playlistName) return playlist;
  
      if (playlist.songs.some(existingSong => existingSong.title === song.title)) {
        throw new Error('Song already exists in the playlist');
      }
  
      return {
        ...playlist,
        songs: [...playlist.songs, { ...song, favorite: false }]
      };
    });
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const playlist = playlists.find(playlist => playlist.name === playlistName);

  if (!playlist) {
    throw new Error('Unable to find playlist');
  }

  if (!playlist.songs.some(song => song.title === title)) {
    throw new Error('Unable to find song in the playlist');
  }

  playlists = playlists.map(playlist => {
    if (playlist.name !== playlistName) return playlist;
    return {
      ...playlist,
      songs: playlist.songs.filter(song => song.title !== title)
    };
  });
};

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    const playlist = playlists.find(playlist => playlist.name === playlistName);
    if (!playlist) throw new Error('Unable to find playlist');
  
    const favoritedSong = playlist.songs.find(song => song.title === title);
    if (!favoritedSong) throw new Error('Unable to find song in the playlist');
  
    const modifiedSongs = playlist.songs.map(song =>
      song.title === title ? {...song, favorite: true}: song
    );
  
    const modifiedPlaylist = {name: playlist.name, songs: modifiedSongs};
    playlists = playlists.map(currentPlaylist  =>
        currentPlaylist.name === playlistName ? modifiedPlaylist: currentPlaylist);
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    
  };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog