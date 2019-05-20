import React, { Component } from 'react';

class GifListContainer extends Component {

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g', {
      method: "POST",
      headers: {
        'Content-Type: app/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
      return (
        <div>
          <button onClick={this.handleSubmit}>Click to Fetch!</button>
        </div>
      )
    }


}

export default GifListContainer
