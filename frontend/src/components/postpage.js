import React, { Component } from "react";
import Header from "./header";
import PostWrapper from "./postwrapper";
import PageNavigation from "./pagenavigation";

import "../css/style.css";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.forwardedData;
    this.setState({ comvalue: "" });

    this.handlechange = this.handlechange.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  handlechange(event) {
    this.setState({ comvalue: event.target.value });
  }

  postComment(event) {
    alert(this.state.comvalue);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header />
        <div class="page">
          <PageNavigation />
          <div id="postPreviews">
            <PostWrapper
              title={this.state.title}
              desc={this.state.desc}
              image={this.state.image}
              karma={this.state.karma}
              numcomments={this.state.numcomments}
              numreplies={this.state.numreplies}
            />
            <button class="report-button" type="button">Report</button>
          </div>
          <form
            id="commentform"
            onSubmit={this.postComment}
          >
            <div class="comment-container">
              <textarea
                name="comment"
                class="comment-box"
                rows="5"
                cols="80"
                required="required"
                value={this.state.comvalue}
                onChange={this.handlechange}
              ></textarea>
              <div>
                <input
                  type="submit"
                  value="Post Comment"
                  id="post"
                  className="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostPage;
