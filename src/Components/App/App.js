import React from 'react';
import './App.css';
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { SearchBar } from "../SearchBar/SearchBar";
const {Spotify} = require('../../util/Spotify');

Spotify.getAccessToken();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'Hungry - Remix', artist: 'Niklas Ibach', album: 'unknown', id: 5},
        {name: 'Prayer in C', artist: 'Lilly Wood & The Pricks', album: 'cool', id: 6}],
      playlistName: 'chill',
      playlistTracks: [{name: 'Follow you', artist: 'twocolors', album: 'unknown', id: 1},
                       {name: 'Fade', artist: 'Alan Walker', album: 'Best', id: 2},
                       {name: 'Under the Sun', artist: 'Miskeyz', album: 'unknown', id: 3},
                       {name: 'To California', artist: 'J Lisk', album: 'anything', id: 4}]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  /*
  componentDidMount() {
    Spotify.getAccessToken();
  }
  */

  addTrack(track) {
    if (!this.state.playlistTracks.find((savedTrack) => {return savedTrack.id === track.id})) {
      let newPlaylistTracks = this.state.playlistTracks;
      newPlaylistTracks.push({name: track.name, artist: track.artist, album: track.album, id: track.id});
      this.setState({
        playlistTracks: newPlaylistTracks
      });
    }
  }

  removeTrack(track) {
    const trackIndex = this.state.playlistTracks.findIndex((savedTrack) => {return savedTrack.id === track.id});
    if (trackIndex !== -1) {
      let newPlaylist = this.state.playlistTracks;
      newPlaylist.splice(trackIndex,1);
      this.setState({
        playlistTracks: newPlaylist
      });
    }
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    let trackURIs = [];
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/*
            <!-- Add a SearchBar component --> */}
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              {/*
              <!-- Add a SearchResults component --> */}
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
              {/*
              <!-- Add a Playlist component --> */}
              <Playlist playlistName={this.state.playlistName}
                        playlistTracks={this.state.playlistTracks}
                        onRemove={this.removeTrack}
                        onNameChange={this.updatePlaylistName}
                        onSave={this.savePlaylist}
                        />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
