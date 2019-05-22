import React from 'react';
import './App.css';
import { SearchResults } from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";

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
    this.removeTrack = this.removeTrack(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    //!this.state.playlistTracks.find((savedTrack) => {return savedTrack.id === track.id})
    if (true) {
      let oldPlaylistTracks = this.state.playlistTracks;
      //{name: track.name, artist: track.artist, album: track.album, id: track.id}
      let newPlaylistTracks = oldPlaylistTracks.push(track);
      this.setState({
        playlistTracks: newPlaylistTracks
      });
    }
  }

  removeTrack(track) {
    const trackIndex = this.state.playlistTracks.find((savedTrack) => {return savedTrack.id === track.id});
    if (trackIndex) {
      const oldPlaylist = this.state.playlistTracks;
      const newPlaylist = oldPlaylist.splice(trackIndex,1);
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

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/*
            <!-- Add a SearchBar component --> */}
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
                        />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
