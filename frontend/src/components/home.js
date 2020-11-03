import React, { Component } from "react";
import Header from "./header";
import PostWrapper from "./postwrapper";
import TrendingPost from "./trendingpost";
import PageNavigation from "./pagenavigation";

import "../css/style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      tposts: [],
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

    var trendingRequest = new Request(
      "http://localhost:3001/api/post/trending"
    );
    let tposts = [];

    fetch(trendingRequest)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tposts: data });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="page">
          <PageNavigation />
          <div id="postPreviews">
            {this.state.posts.map((post) => {
              return (
                <div>
                  <PostWrapper
                    id={post.id}
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
          <div id="sideBar">
            <h2>Trending Posts</h2>
            {this.state.tposts.map((post) => {
              return (
                <div>
                  <TrendingPost
                    title={post.title}
                    desc={post.text}
                    image={`http://localhost:3001/${post.imageName}`}
                    karma={post.karma}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
