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
      <div className="col-md-6">
          <input type="text"
          className ="form-control" 
          id="search"
          placeholder = "Search Songs"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
          <h3>Songs</h3>
        {songItems}
      </div>
    );
  }
}

export default Songs;