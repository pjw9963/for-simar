import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import '../css/messages.css'
import './gohomeredirect'
import Home from './home';

import { useHistory } from "react-router"

function GoHomeRedirect() {
  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
    <img id="instachanLogo" 
        src="/images/ic.png" 
        alt="Go Home"
        onClick={() => handleClick()}>
    </img>
  )
}

class Header extends React.Component {

    render () {

        return (
            <div style={{
                textAlign: "center",
                fontSize: 20
            }}>
                    <GoHomeRedirect />
                
                    <div>
                    <ul id="branches">
                        <li><a class="ylo" href="homepage.html">/all</a></li>
                        <li><a class="ylo" href="#">/anime</a></li>
                        <li><a class="ylo" href="#">/auto</a></li>
                        <li><a class="ylo" href="#">/cats</a></li>
                        <li><a class="ylo" href="#">/cooking</a></li>
                        <li><a class="ylo" href="#">/dogs</a></li>
                        <li><a class="ylo" href="#">/memes</a></li>
                        <li><a class="ylo" href="#">/rit</a></li>
                    </ul>
                </div>
                <input id="search" type="text" placeholder="Search.."></input>
                <p></p>
            </div>
            
        );
    }
}
export default Header;