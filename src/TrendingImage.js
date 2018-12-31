import React, { Component } from 'react';
import './TrendingImage.css';

class TrendingImage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.images.preview_gif.url} alt={this.props.item.title}/>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default TrendingImage;
