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

  <GifList>

  render() {
      return (
        <div>
        <GifSearch gifs={this.props.handleSubmit} />
        </div>
      )
    }


}

export default GifListContainer
