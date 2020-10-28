import React from 'react';

import '../css/style.css'

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
            <div>
                <p>{this.props.title}</p>
                <button class="triangle-up" 
                            id="upvote"
                            onClick={
                                () => this.setState({karma: this.state.karma + 1})
                            }>
                </button>
                    <label>{this.state.karma}</label>
                    
                    <button class="triangle-down" 
                            id="downvote"
                            onClick={
                                () => this.setState({karma: this.state.karma - 1})
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
            </div>
            
        );
    }
}
export default Post;