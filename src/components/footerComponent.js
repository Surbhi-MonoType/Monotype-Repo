import React, { Component } from 'react';
  
class Footer extends Component {
	render(){
		return (
			<div>
				<footer id="mainFooter">
        <nav className="links">
          <div className="linkRow">
            <a href="/help/">Help</a>
                  <a href="/info/webfonts/">Webfonts</a>
            <a href="/licensing/">Licensing</a>
            <a href="http://meta.myfonts.com/">Blog</a>
            <a href="/newsletters/">Newsletters</a>
            <a href="/info/legal/" target="_blank">Legal</a>
            <a href="//foundry.myfonts.com/guides/">Sell Your Fonts</a>
                  <a href="#getshorturl" id="footer_short_url" className="bhvr_global_12">Get Short URL</a>
          </div>
        </nav>
        <nav className="social">
          <a href="http://twitter.com/MyFonts" title="Twitter">t</a>
          <a href="http://facebook.com/MyFonts" title="Facebook">f</a>
          <a href="http://www.pinterest.com/myfonts/" title="Pinterest">p</a>
          <a href="http://myfonts.tumblr.com/" title="Tumblr">T</a>
          <a href="http://instagram.com/myfonts" title="Instagram">I</a>
        </nav>
        <div>The Monotype Brand Family</div>
        <nav className="brands">
          <a className="brands_monotype" href="https://www.monotype.com/">
            <img src="/s/images/logo/monotype_logo_footer.png" alt="Monotype logo" />
          </a>
          <a className="brands_olapic" href="http://www.olapic.com/">
            <img src="/s/images/logo/olapic_logo_footer.png" alt="Olapic logo" />
          </a>
          <a className="brands_mosaic" href="https://www.monotype.com/fonts/mosaic">
            <img src="/s/images/logo/mosaic_logo_footer.png" alt="Mosaic logo" />
          </a>
          <a className="brands_myfonts" href="http://www.myfonts.com/">
            <img src="/s/images/logo/myfonts_logo_footer.png" alt="MyFonts logo" />
          </a>
        </nav>
        <div>Copyright © 1999-2018 MyFonts Inc.</div>
      </footer>
			</div>
		)
	}

}

export default Footer;