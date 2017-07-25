import React, { Component } from 'react';


class SearchSong extends Component {
  constructor(){
  super();
  }

    handleFilter(){
    let filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('keyup', filterSongs);

    function filterSongs(){
      let filterValue = document.getElementById('filterInput').value;
      
    } 
  }
  render() {
    return (
      <header>
        <input className ="search" id="filterInput" placeholder = "Search Songs"/>
      </header>
    );
  }
}

export default SearchSong;