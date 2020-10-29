import React, { Component } from 'react';
import Header from './header';
import Post from './post';

import '../css/style.css';

class ModPage extends Component {
  
    render() {
    return (
        <div>
          <Header />
          <div class="page">
                <div id="postPreviews" style={{color:"white"}}>
                    <form action="postpreview.html" id="post">
                        <input type="submit" value="Post" />
                    </form>
                    <form action="messagePage.html" id="message">
                        <input type="submit" value="Message" />
                    </form>
                    <form action="modpage.html" id="logIn">
                        <input type="submit" value="Log In"/>
                    </form>
                    <h1>Cat that I found (hardcoded value)</h1>
                    <Post
                        title = "Cat I found"
                        desc = "This is an image of a cat that I found the other day and this cat was being super adorable and I just love it so much"
                        image = "/images/kitty.webp"
                        karma = "10"
                        numcomments = "4"
                        numreplies = "1"
                    />
                    <hr/>
                    <h1>Picture of RIT (hardcoded value)</h1>
                    <Post 
                        title = "Picture of RIT"
                        desc = "Picture of RIT the other day"
                        image = "/images/rit.jpg"
                        karma = "68"
                        numcomments = "13"
                        numreplies = "6"
                        showtitle = {true}
                    />
                </div>
                <div id="sideBar">
                    this is the trending margin
                </div>
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