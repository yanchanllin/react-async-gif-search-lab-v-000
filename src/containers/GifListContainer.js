import React, { Component } from 'react';

class GifListContainer extends Component {
  state = { comments: [] };
  
  componentDidMount() {
  fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    .then(data => {
    this.setState({ comments: comments
      })
    })
  }

   submitHandler() => {
     
   }
  render() {
      return (
        <div>
          <GifSearch this.submitHandler.props />
        </div>
      )
    }
    

}

export default GifListContainer
