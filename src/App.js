import React, { Component } from 'react';
import SearchBox from './SearchBox';
import TrendingImage from './TrendingImage';
//import {Jumbotron, Button} from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
      selectedImage : "",
    }
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentDidMount() {
    const url = "https://api.giphy.com/v1/gifs/trending?api_key=";
    const api_key = "0d05b586e3ff4884b6dc9837d9601726";
    const limit = 50;
    fetch(url+api_key+"&limit="+limit)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded : true,
          items : json,
        })
      })
  }

  handleMouseClick(id) {
    console.log(id);
    this.setState({
      selectedImage : id
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
          <SearchBox />
          <ul>
            {items.data.map(item => (
              <li key={item.id} onClick={() => this.handleMouseClick(item.id)}>
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
