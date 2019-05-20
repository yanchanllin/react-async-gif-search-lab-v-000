import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const Api ='http://api.giphy.com/v1/gifs/search?q=';
const key ='dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {
 constructor(props){
   super()

   this.state=({
     gifs: []
     searchValue:''
   })
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleChange = this.handleChange.bind(this)
 }
 
handlechange(event) {
  this.setState({
    searchValue:event.target.value
  }) 
}

getFetch() {
  let request = this.state.searchValue
  fetch(Api + request + Key)
     .then(response => response.json())
     .then(data => this.setState({
       gifs: data.data.slice(0,3)
     }))
 }

  handleSubmit = event => {
    event.preventDefault()
     this.getFetch()
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
