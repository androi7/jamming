import React from 'react';
import { Track } from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/*
                <!-- You will add a map method that
                         renders a set of Track components --> */}
                {this.props.tracks.map((track) => {
                    return <Track key={track.id}
                                  artist={track.artist}
                                  album={track.album}
                                  name={track.name}
                                  onAdd={this.props.onAdd}
                                  track={track}
                                  onRemove={this.props.onRemove}
                                  isRemoval={this.props.isRemoval}
                                  />
                    })
                }
            </div>
        );
    }
}