import React, { Component } from 'react';


class SongItem extends Component {
  render() {
    return (
      <li className="list-unstyled" id="list">
        <strong>{this.props.song.title}</strong> - {this.props.song.artist} - {this.props.song.category}
      </li>
    );
  }
}

export default SongItem;