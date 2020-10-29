import React from 'react';
import { useHistory } from "react-router"

import '../css/messages.css'

function GoHomeRedirect() {
  let history = useHistory()

  function clickHome() {
    history.push("/")
  }

    return (
        <div>
            <img id="instachanLogo" 
            src="/images/ic.png" 
            alt="Go Home"
            onClick={() => clickHome()}>
            </img>
            <ul id="branches">
                <li><a class="ylo" href="#" onClick={() => clickHome()}>/all</a></li>
                <li><a class="ylo" href="#">/anime</a></li>
                <li><a class="ylo" href="#">/auto</a></li>
                <li><a class="ylo" href="#">/cats</a></li>
                <li><a class="ylo" href="#">/cooking</a></li>
                <li><a class="ylo" href="#">/dogs</a></li>
                <li><a class="ylo" href="#">/memes</a></li>
                <li><a class="ylo" href="#">/rit</a></li>
            </ul>
        </div>
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
                <input id="search" type="text" placeholder="Search.."></input>
                <p></p>
            </div>
            
        );
    }
}
export default Header;