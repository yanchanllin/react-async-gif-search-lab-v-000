import React, { Component } from 'react';

class GifListContainer extends Component {

   submitHandler= event => {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
   .then(res => res.json())
   .then(json => this.setState({data: json}))
   }
  render() {
      return (
        <div>
          <button onClick={this.props.submitHandler}>Click to Fetch!</button>
        </div>
      )
    }


}

export default GifListContainer
