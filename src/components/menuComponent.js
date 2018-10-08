import React, { Component } from 'react';
  
class Menu extends Component {
	render(){
		return (
			<div>
				<nav className="navigationBar">
          <div className="navigationBar__linkWrapper">
            <a className="navigationBar__link" href="/hotnewfonts/">Hot New Fonts</a>
            <a className="navigationBar__link" href="/bestsellers/">Best Sellers</a>
            <a className="navigationBar__link" href="/whatsnew/">What's New</a>
            <a className="navigationBar__link" href="/specials/">Special Offers</a>
            <a className="navigationBar__link" href="/bundles/">Bundles</a>
            <div className="navigationBar__menu">
              <a className="navigationBar__link navigationBar__link--toggle" href="/WhatTheFont/">WhatTheFont</a>
              <nav className="navigationBar__submenu">
                <div className="navigationBar__submenu__linkWrapper">
                  <a className="navigationBar__link" href="/WhatTheFont/">WhatTheFont</a>
                  <a className="navigationBar__link" href="/WhatTheFont/forum/">WhatTheFont Forum</a>
                  <a className="navigationBar__link" href="/WhatTheFont/mobile/">WhatTheFont Mobile</a>
                </div>
              </nav>
            </div>
            <a className="navigationBar__link" href="/team/">Team Subscription</a>
          </div>
        </nav>
			</div>
		)
	}

}

export default Menu;