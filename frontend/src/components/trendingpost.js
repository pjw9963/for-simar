import React from "react";
import { useHistory } from "react-router";

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
    <img
      onClick={() => handleClick()}
      id="postImage"
      src={props.pps.image}
      alt={props.pps.title}
      class="trending-image"
    ></img>
  );
}

class TrendingPost extends React.Component {
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
      <div style={{ color: "black" }}>
        <GoToPostRedirect pps={this.props} />
        <div>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}
export default TrendingPost;
