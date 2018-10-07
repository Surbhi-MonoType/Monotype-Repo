import React, { Component } from 'react';
import './about-family.css';

class AboutFamily extends Component {
    constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props..."
      }
   }
    render() {
        return (
        
        <div class="article_tease_container">
        <Something headerPrio = {this.state.header}/>
            <h3>About this font family</h3>
                        <p>
                This typeface was initially released as Neue Haas Grotesk, and was designed in 1957 by Max Miedinger for the Haas’sche Schriftgiesserei (Haas Type Foundry) in Switzerland.
                            </p>
                    <p>
                The name was changed to Helvetica (an adaptation of <i lang="la">Helvetia</i>, the Latin name for Switzerland) by <a href="/person/cunz/walter/">Walter Cunz</a> when <a href="/foundry/stempel/">D. Stempel AG</a>, a major stockholder in Haas, reworked the design for Linotype GmbH in Frankfurt, a major stockholder in Stempel. The <a href="/foundry/mergenthaler/">Mergenthaler Linotype</a> Company in New York, then a major stockholder of Linotype GmbH, adopted the design, and it rapidly became the most popular sanserif in the world, replacing <a href="/fonts/linotype/futura/" class="tooltip">Futura</a>.
                                    <a href="?more" class="article_tease_more">More…</a>
                            </p>
        
                    <p class="hidden">Helvetica is designed as a strong central series, with condensed and extended forms and extreme weights adapted and added later, a system which suited Linotype mechanical limitations and marketing philosophy, but which resulted in a family of weights that were not as well coordinated as they might have been.</p>
                    <p class="hidden">Linotype’s limited licensing forced a large number of unauthorized copies of Helvetica, none of which may be viewed as an improvement.</p>
            <h1>surbhi singh</h1>
            </div>);
    }
}

class Something extends Component{
    render(){
        return(
                <div><h1>{this.props.headerPrio}</h1></div>
            )
    }
}


export default AboutFamily;