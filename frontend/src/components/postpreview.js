import React, { Component } from 'react';
import Header from './header';
import PostWrapper from './postwrapper';

import '../css/style.css';

class PostPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {picval: "/images/mountain.jpg"};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({picval: event.target.value});
    }
  
    render() {
    return (
        <div>
          <Header />
            <div class="page">
                <div id="postPreviews">
                    <form action="newhomepage.html">
                        <label for="images">Choose a Image:</label>
                        <select value={this.state.picval} onChange={this.handleChange} id="images" name="img">
                            <option value="/images/kitty.webp">Kitty</option>
                            <option value="/images/rit.jpg">RIT</option>
                            <option value="/images/code.jpg">Code</option>
                            <option value="/images/mountain.jpg">Mountain</option>
                        </select>
                        <img id="output" src={this.state.picval} class="center"/>
                        <p></p>
                        <textarea id="textDetails" name="text" rows="4" cols="50" class="center" />
                        <input type="submit" value="Post" id="submit"/>
                    </form>
                    <form action="homepage.html" id="back">
                        <input type="submit" value="Back" />
                    </form>
                </div>
            </div>
        </div>
    );
  }

}

export default PostPreview;