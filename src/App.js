import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header  from './components/headerComponent';
import Menu  from './components/menuComponent';
import Category  from './components/categoryComponent';
import Text  from './components/textComponent';
import Footer  from './components/footerComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
      
<div id="myfontsContainer" className="newHeaderFooter includesCategories transition-fade transition-transform fluid">
      <div className="headerWrapper">
  <Header />
        <Menu />
        <Category />
        </div>
      <Text />
      <Footer />
    </div>
      </div>
    );
  }
}

export default App;
