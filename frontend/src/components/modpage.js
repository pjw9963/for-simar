import React, { Component } from "react";
import Header from "./header";
import PostWrapper from "./postwrapper";

import "../css/style.css";

class ModPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    var myRequest = new Request("http://localhost:3001/api/posts");
    let posts = [];

    fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="page">
          <div id="postPreviews">
            {this.state.posts.map((post) => {
              return (
                <div>
                  <PostWrapper
                    title={post.title}
                    desc={post.text}
                    image={`http://localhost:3001/${post.imageName}`}
                    karma={post.upVotes + post.downVotes}
                    numcomments="4"
                    numreplies="1"
                  />
                </div>
              );
            })}
          </div>
          <div id="sideBar">this is the trending margin</div>
          <div id="reportsBar">
            this is the report margin
            <p></p>
            <a href="reportpage.html">I hate Cats</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ModPage;
