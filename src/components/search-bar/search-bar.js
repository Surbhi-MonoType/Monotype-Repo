import React, { Component } from 'react';
import './search-bar.css';

class SearchBar extends Component {


    render() {
        return (<div className="search">
        
            <input placeholder="Search over 130,000 fonts…and counting!" className = "textarea-alignment" />

            <button className = 'searchbutton-alignment' type="button">Search</button>
        </div>);
    }
}


export default SearchBar;