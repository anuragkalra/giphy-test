import React, { Component } from 'react';
import TrendingImage from './TrendingImage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
    }
  }

  componentDidMount() {
    const api_key = "0d05b586e3ff4884b6dc9837d9601726";
    fetch("https://api.giphy.com/v1/gifs/trending?api_key="+api_key)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded : true,
          items : json,
        })
      })
  }

  render() {
    var {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading</div>;
    }
    else {
      return (
        <div className="App">
          <ul>
            {items.data.map(item => (
              <li key={item.id}>
                  <TrendingImage name={item.title} item={item}/>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
