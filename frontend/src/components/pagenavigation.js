import React, { Component } from "react";

import "../css/style.css";

class PageNavigation extends Component {
  render() {
    return (
      <div>
        <a class="link-button" href="preview">
          Post
        </a>
        <a class="link-button" href="messages">
          Messages
        </a>
        <a class="link-button" href="mod">
          Log in
        </a>
      </div>
    );
  }
}

export default PageNavigation;
