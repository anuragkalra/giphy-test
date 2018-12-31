import React, { Component } from 'react';
import './TrendingImage.css';

class TrendingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState(
      {hover: true}
    );
  }

  mouseOut() {
    this.setState(
      {hover: false}
    );
  }

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseOut}>
        <img src={this.props.item.images.preview_gif.url} alt={this.props.item.title}/>
        {this.state.hover ? <h2 id="1">{this.props.item.title}</h2> : null}
      </div>
    )
  }
}

export default TrendingImage;
