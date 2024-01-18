import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
 
  // code here
  render(){
    const images = this.props.imgData;

    return(
      <div>
        <h1>Kalvium Gallery</h1>
      <div id="grid">
        {
          images.map((element) => (
            <img src={element.img} id={element.id}/>
          ))}
      </div>
      </div>
    )
  }
}