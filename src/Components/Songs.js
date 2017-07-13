import React, { Component } from 'react';
import SongItem from './SongItem';


class Songs extends Component {
  render() {
    let songItems;
    if (this.props.songs){
      songItems = this.props.songs.map(song => {
        return(
          <SongItem key={song.title} song={song} />
        )
    });
  }
    return (
      <div className="Songs">
        {songItems}
      </div>
    );
  }
}

export default Songs;