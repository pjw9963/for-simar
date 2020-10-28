import React from 'react';

import '../css/style.css'
import { useHistory } from "react-router"

function GoToPostRedirect(props) {
    let history = useHistory()
  
    function handleClick() {
      history.push({
          pathname: "/post",
          forwardedData: props.pps
      })
    }
  
    return (
      <h1 style={{color: "white"}} onClick={() => handleClick()}>
      {props.pps.title}
      </h1>
    )
  }

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karma: this.props.karma,
            numcomments: this.props.numcomments,
            numreplies: this.props.numreplies
        }
    }

    render () {
        return (
            <div style={{color: "white"}}>
                <GoToPostRedirect 
                        pps={this.props} 
                />
                <button class="triangle-up" 
                            id="upvote"
                            onClick={
                                () => this.setState({karma: parseInt(this.state.karma) + 1})
                            }>
                </button>
                    <label>{this.state.karma}</label>
                    
                    <button class="triangle-down" 
                            id="downvote"
                            onClick={
                                () => this.setState({karma: parseInt(this.state.karma) - 1})
                            }>
                    </button>
                    <p>
                        <img id="postImage" src={this.props.image} alt={this.props.title} class="center"></img>
                        {this.props.desc}
                    </p>
                    <button onclick = "location.href = 'postpage.html';" 
                            onclick = "postImage(document.getElementById('postImage').id);" 
                            class   = "float-left submit-button">{this.state.numcomments} comments</button>
                    
                    <button onclick = "location.href = 'postpage.html';" 
                            onclick = "postImage(document.getElementById('postImage').id);" 
                            class   = "float-left submit-button">{this.state.numreplies} replies</button>
                    <hr/>
            </div>
            
        );
    }
}
export default Post;