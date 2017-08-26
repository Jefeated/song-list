import React, { Component } from 'react';
import SongItem from './SongItem';


class Songs extends Component {
  constructor(){
    super();
    this.state = {
      search:''
    };
  }
  
  updateSearch(event) {
    this.setState({search: event.target.value});
  }
  
  render() {
    let filteredSongs = this.props.songs.filter(
      (song) => {
        return song.title.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    )
    let songItems;
    if (this.props.songs){
      songItems = filteredSongs.map(song => {
        return(
          <SongItem key={song.title} song={song} />
        )
    });
  }
    return (
      <div className="Songs">
          <input type="text"
          className ="search" 
          placeholder = "Search Songs"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
        {songItems}
      </div>
    );
  }
}

export default Songs;