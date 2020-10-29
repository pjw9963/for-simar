import React from 'react';
import { useHistory } from "react-router"

import '../css/messages.css'

function GoHomeRedirect() {
  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
      <div>
            <img id="instachanLogo" 
                src="/images/ic.png" 
                alt="Go Home"
                onClick={() => handleClick()}>
            </img>
            <p style={{fontSize: "100px"}}>404</p>
            <p style={{fontSize: "30px"}}>The requested URL was not found.</p>
            <a href="#" style={{fontSize: "30px"}} onClick={() => handleClick()}>Go Home?</a>
      </div>
    
  )
}

class NotFound extends React.Component {

    render () {
        return (
            <div style={{
                textAlign: "center",
                color: "white",
                margin: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                msTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)"
            }}>
                <GoHomeRedirect />
            </div>
            
        );
    }
}
export default NotFound;