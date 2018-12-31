import React, { Component } from 'react';
import './App.css';
import DisplayImages from './DisplayImages.js';
import myData from './data.json';
import {buildUrl} from './utils.js';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      items: [] ,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

	fetchResults(props) {
    const url = "https://api.giphy.com/v1/gifs/search?api_key=";
    const api_key = myData.api_keys.key1;
    const search = myData.endpoints.search;
    const cat = buildUrl();
    console.log(cat);
    const url_no_query = "https://api.giphy.com/v1/gifs/search?api_key=0d05b586e3ff4884b6dc9837d9601726&limit=10&offset=0&rating=G&lang=fr&q=";
    fetch(url_no_query+this.state.value)
      .then(result=>result.json())
      .then(res => {
        this.setState( {items : res.data} );
    })
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="form-inline">
         <input type="text" placeholder="Search Gifs" id="search" value={this.state.value} onChange={this.handleChange} className="form-control "/>
         <button type="submit" value="Submit" onClick={() => {this.fetchResults(this.state.searchQuery)}} className="btn btn-default">Submit</button>
         <DisplayImages items={this.state.items}/>
      </div>
    );
  }
}

export default SearchBox;
