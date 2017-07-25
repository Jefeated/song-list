import React, { Component } from 'react';
import Songs from './Components/Songs';
import AddSong from './Components/AddSong';
import SearchSong from './Components/SearchSong';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      songs: []
    }
  }

  componentWillMount(){
    this.setState({songs: [
        {
          title: 'Mr.Sun',
          artist: 'Raffi',
          category: 'Childern'
        },
        {
          title: "I'll make love to you",
          artist: 'Boyz II Men',
          category: 'R&B'
        },
        {
          title: 'Song 2',
          artist: 'Blur',
          category: 'Rock'
        }
    ]});
  }

  handleAddSong(song){
    let songs = this.state.songs;
    songs.push(song);
    this.setState({songs:songs});
  }

  render() {
    return (
      <div className="App">
        <SearchSong searchSongs = {this.state.searchSong}/>
        <AddSong addSong = {this.handleAddSong.bind(this)} />
        <Songs songs={this.state.songs}/>
      </div>
    );
  }
}

export default App;
