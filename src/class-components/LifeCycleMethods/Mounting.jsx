import React, { Component } from 'react'

export default class Mounting extends Component {
  componentDidMount(){ // life cycle method,which is automatically called when the component mount
      console.log("Component mounted!");
  }
  render() {
    return <p>Componet has been mounted!</p>
  }
}
