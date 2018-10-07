import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import SearchBar from './components/search-bar/search-bar';
import FontFamilyHeader from './components/font-family-header/font-family-header';
import DownloadSection from './components/download-section/download-section';
import AboutFamily from './components/about-family/about-family';
import FamilyPreview from './components/family-preview/family-preview';


class App extends Component {


  render() {
    return (
      <div className="App">        
        <Header></Header>
        <h1>Surbhi Singh</h1>
        <SearchBar onSearch={this.onSearch}></SearchBar>
        <FontFamilyHeader></FontFamilyHeader>
        <FamilyPreview></FamilyPreview>
        <AboutFamily></AboutFamily>
        <DownloadSection></DownloadSection>
      </div>
    );
  }
}

export default App;
