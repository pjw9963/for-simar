import { func } from 'prop-types';
import React from 'react';
import { useHistory } from "react-router"

import '../css/messages.css'

function itsAPrototype() {
    alert('Only one branch exists for now. This is only a prototype');
}

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
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/anime</a></li>
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/auto</a></li>
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/cats</a></li>
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/cooking</a></li>
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/dogs</a></li>
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/memes</a></li>
                <li><a class="ylo" href="#" onClick={() => itsAPrototype()} >/rit</a></li>
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