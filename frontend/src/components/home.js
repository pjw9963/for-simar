import React, { Component } from "react";
import Header from "./header";
import PostWrapper from "./postwrapper";

import "../css/style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="page">
          <a class="link-button" href="preview">
            Post
          </a>
          <a class="link-button" href="messages">
            Messages
          </a>
          <a class="link-button" href="mod">
            Log in
          </a>
          <div id="postPreviews">
            <PostWrapper
              title="Cat I found"
              desc="This is an image of a cat that I found the other day and this cat was being super adorable and I just love it so much"
              image="/images/kitty.webp"
              karma="10"
              numcomments="4"
              numreplies="1"
            />
            <PostWrapper
              title="Picture of RIT"
              desc="Picture of RIT the other day"
              image="/images/rit.jpg"
              karma="68"
              numcomments="13"
              numreplies="6"
            />
          </div>
          <div id="sideBar">this is the left margin</div>
          <a href="preview" class="btn btn-primary">
            Click for Post Page
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
