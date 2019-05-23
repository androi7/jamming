import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return (
                <button className="Track-action" onClick={this.removeTrack}>-</button>
            );
        } else {
            return (
                <button className="Track-action" onClick={this.addTrack}>+</button>
            );
        }

    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/* <!-- track name will go here --> */}{this.props.name}</h3>
                    <p>{/* <!-- track artist will go here --> | <!--
                     track album will go here --> */}{this.props.artist} | {this.props.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}