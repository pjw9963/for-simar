import React from "react";
import { useHistory } from "react-router";
import Post from "./post";

import "../css/style.css";

function GoToPostRedirect(props) {
  let history = useHistory();

  function handleClick() {
    history.push({
      pathname: "/post",
      forwardedData: props.pps,
    });
  }
  return (
    <h1
      style={{ color: "white", textDecoration: "underline" }}
      onClick={() => handleClick()}
      class="title"
    >
      {props.pps.title}
    </h1>
  );
}

class PostWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      karma: this.props.karma,
      numcomments: this.props.numcomments,
      numreplies: this.props.numreplies,
    };
  }

  render() {
    return (
      <div style={{ color: "white"}}>
        <GoToPostRedirect pps={this.props} />

        <div class="karma" className="karma">
          <input
            width="50px"
            height="35px"
            type="image"
            src="images/triangle_up_green.png"
            class="upvote"
            id="upvote"
            onClick={() =>
              this.setState({ karma: parseInt(this.state.karma) + 1 })
            }
          />          
          <input
            width="50px"
            height="35px"
            type="image"
            src="images/triangle_down_red.png"
            class="downvote"
            id="downvote"
            onClick={() =>
              this.setState({ karma: parseInt(this.state.karma) - 1 })
            }
          />
          <span class="karma-container"><label>{this.state.karma}</label></span>          
        </div>

        <div style={{ paddingTop: "0.2em" }}>
          <Post
            title={this.props.title}
            showtitle={false}
            image={this.props.image}
            desc={this.props.desc}
          />
        </div>
        
        <button
          onclick="location.href = 'postpage.html';"
          onclick="postImage(document.getElementById('postImage').id);"
          class="float-left submit-button"
        >
          {this.state.numcomments} comments
        </button>

        <button
          onclick="location.href = 'postpage.html';"
          onclick="postImage(document.getElementById('postImage').id);"
          class="float-left submit-button"
        >
          {this.state.numreplies} replies
        </button>
        <hr />
      </div>
    );
  }
}
export default PostWrapper;
