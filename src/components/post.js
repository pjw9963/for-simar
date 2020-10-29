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
            <div style={{color: "white"}}>
                <p>
                    <img id="postImage" src={this.props.image} alt={this.props.title} class="center"></img>
                    {this.props.desc}
                </p>
            </div>
            
        );
    }
}
export default Post;