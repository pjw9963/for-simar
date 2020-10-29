import React, { Component } from 'react';
import Header from './header';
import PostWrapper from './postwrapper';

import '../css/style.css';

class PostPage extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.location.forwardedData;
        this.setState({comvalue: ''});

        this.handlechange = this.handlechange.bind(this);
        this.postComment = this.postComment.bind(this);
    }

    handlechange(event) {
        this.setState({comvalue: event.target.value});
    }
    
    postComment(event) {
        alert(this.state.comvalue)
        event.preventDefault();
    }

    render() {
    return (
        <div>
            <Header />
            <div class="page">
                    <div id="postPreviews">
                        <form action="postpreview.html" id="post">
                            <input type="submit" value="Post" />
                        </form>
                        <form action="messagePage.html" id="message">
                            <input type="submit" value="Message" />
                        </form>
                        <form action="modpage.html" id="logIn">
                            <input type="submit" value="Log In"/>
                        </form>
                        <PostWrapper
                            title = {this.state.title}
                            desc = {this.state.desc}
                            image = {this.state.image}
                            karma = {this.state.karma}
                            numcomments = {this.state.numcomments}
                            numreplies = {this.state.numreplies}
                        />
                    </div> {/** NOTE: comment data is currently being sent to postComment(), and PHP is suppressed
                                To change this behavior, remove the onSubmit tag of the form \/ */}
                    <form action="post_comment.php" method="post" id="commentform" onSubmit={this.postComment}>
                        <label for="comment" class="required"></label>
                        <textarea name="comment" id="comment" rows="10" cols = "100"  required="required" value={this.state.comvalue} onChange={this.handlechange}></textarea>
                        <input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />
                        <input type="submit" value="Post" id="post" className="submit" />
                    </form>
            </div>

        </div>
    );
  }

}

export default PostPage;