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
        <div className="col-md-4">
          <form  onSubmit={this.handleSubmit.bind(this)}> 
            <div className="form-group">
          <h3>Add Song</h3>
            <div>
              <h5>Title</h5>
              <input className="form-control" type="text" ref="title" />
            </div>
            <div>
              <h5>Artist</h5>
              <input className="form-control" type="text" ref="artist" />
            </div>
            <div>
              <h5>Category</h5>
              <select className="form-control" ref="category">
                {categoryOptions}
              </select>
            </div>
            <br />
            <input className="btn btn-default" type="submit" value="Submit" />
            </div>
          </form>
        </div>
    );
  }
}

export default AddSong;