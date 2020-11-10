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
  return <span onClick={() => handleClick()}>{props.pps.title}</span>;
}

function GoToPostRedirectComment(props) {
    let history = useHistory();

    function handleClick() {
        history.push({
            pathname: "/post",
            forwardedData: props.pps,
        });
    }
    return <button onClick={() => handleClick()}>{props.pps.numcomments} comments</button>;
}

function GoToPostRedirectReplies(props) {
    let history = useHistory();

    function handleClick() {
        history.push({
            pathname: "/post",
            forwardedData: props.pps,
        });
    }
    return <button onClick={() => handleClick()}>{props.pps.numreplies} replies</button>;
}

class PostWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      karma: this.props.karma,
      numcomments: this.props.numcomments,
      numreplies: this.props.numreplies,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.karma!== this.state.karma) {
        let payload = {
            id: this.state.id,
            karma: this.state.karma
          };
        fetch("http://localhost:3001/api/post/karma", {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          })
            .then((res) => res.json())
            .then((json) => console.log(json));
    }
}

  render() {
    return (
      <div class="post-wrapper" style={{ color: "white" }}>
        <div class="post-header">
          <div class="post-title-container">
            <GoToPostRedirect pps={this.props} />
          </div>

          <div class="karma" className="karma">
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
            <span class="karma-container">
              <label>{this.state.karma}</label>
            </span>
              <input
                  width="50px"
                  height="35px"
                  type="image"
                  src="images/triangle_up_green.png"
                  className="upvote"
                  id="upvote"
                  onClick={() =>
                      this.setState({karma: parseInt(this.state.karma) + 1})
                  }
              />
          </div>
        </div>

        <div class="post-container">
          <Post
            title={this.props.title}
            showtitle={false}
            image={this.props.image}
            desc={this.props.desc}
            karma={this.props.karma}
          />
            <div>
                <GoToPostRedirectComment pps={this.props}/>
            </div>

            <div>
                <GoToPostRedirectReplies pps={this.props}/>
            </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default PostWrapper;
