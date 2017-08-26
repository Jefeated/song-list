import React, { Component } from 'react';


class AddSong extends Component {
  constructor(){
  super();
  this.state={
    newSong:{}
    }
  }
  static defaultProps = {
    categories: ['Blues', 'Childern', 'Jazz', 'Pop', 'R&B', 'Rock']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Can not be blank');
    } else {
      this.setState({newSong:{
        title:this.refs.title.value,
        artist:this.refs.artist.value,
        category:this.refs.category.value
      }}, function(){
        this.props.addSong(this.state.newSong);
      });
    }
    e.preventDefault();
    this.refs.title.value = '';
    this.refs.artist.value = '';
    this.refs.category.value = '';
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key = {category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Artist</label><br />
            <input type="text" ref="artist" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

export default AddSong;