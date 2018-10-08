import React, { Component } from 'react';
  
class Header extends Component {
	render(){
		return (
			<div>
				<header id="myfontsHeader" className="robots-nocontent clearfix">
          <nav id="headerNavMobile">
            <button className="icon bhvr_header_4"></button>
          </nav>
          <div id="headerContainer">
            <div id="headerCart"><a href="/cart/" className="opener">    <i id="cartImage"></i>
            <span id="cartText">0 items, $0.00</span></a></div>
    
            <div id="headerLogin" className="bhvr_header_5">
              <a id="headerLoginLink" href="https://www.myfonts.com/secure/login/" className="bhvr_header_2">
              <span id="headerLoginUsername">Sign in</span>
                <span className="arrow"></span>
              </a>
                <a className="mls-nav hide" href="/browse/mls/" title="Browse the Monotype Library Subscription">Browse the Monotype Library Subscription</a>

              <iframe className="dropdownLoginFrame" frameborder="0" scrolling="no" src="//www.myfonts.com/widgets/dropdown_login/dropdown_login.php?https=1" style={{"display":"none"}}></iframe>
              <nav id="userMenu" style={{"display":"none"}}>
                <a href="/my/orders/" data-qe-id="orders">Order history &amp; downloads</a>
                <a href="/my/orders/kitbuild.html" data-qe-id="webfontKitBuilder">Webfont kit builder</a>
                <a href="/my/quotes/" data-qe-id="quotes">Price quotes</a>
                <a href="/my/settings/" data-qe-id="settings">Account settings</a>
                <a href="/my/renewals/" data-qe-id="subscriptions">Subscriptions</a>
                <a href="/my/albums/" data-qe-id="albums">Albums</a>
                <a href="/my/favorites/" data-qe-id="favorites" className="userMenu__item--desktopHidden">Favorites</a>
                <a href="/my/tags/" data-qe-id="tags">Tags</a>
                <a href="/my/wtf/" data-qe-id="wtf">WhatTheFont forum posts</a>
                <a href="https://www.myfonts.com/secure/logout/" id="signOut">Sign out</a>
              </nav>
    
              <a href="/my/favorites/" className="favorites hidden"></a>
            </div>
          </div>
    
          <div id="headerLogotypeNew">
            <a href="/"></a>
          </div>
    
          <div className="searchBarWidget searchBoxComponent">
      <form id="searchBarWidgetForm" method="get" action="/search" onsubmit="return handleSubmit(this);">
        <div className="searchBarWidget_filter filter"><span className="selected">All fonts</span>
    <div className="arrow-down"></div>
    <ul className="items hidden">
      <li data-filter="all" className="all hidden">All fonts</li>
      <li data-filter="free" className="free">Free fonts</li>
      <li data-filter="webfonts" className="webfonts">Webfonts</li>
      <li data-filter="mls" className="mls">Subscription</li>
    </ul></div>
        <div className="searchBarWidget__query query">
          <input name="q" size="15" placeholder="Search over 130,000 fonts…and counting!" type="text" autocomplete="off" />
          <ul className="auto_complete_results hidden"></ul>
        </div>
        <button type="submit" id="searchButton" className="searchBarWidget__searchButton">
           <span className="-search">Search</span>
          <span className="-searchMobile">GO</span>
        </button>
      </form>
    </div>
    
          <nav id="headerNavMobileHomepage">
            <a className="signIn" href="https://www.myfonts.com/secure/login/">
              <button>
                              Sign in
                          </button>
            </a>
          </nav>
        </header>
			</div>
		)
	}

}

export default Header;