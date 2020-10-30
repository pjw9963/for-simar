import React, { Component } from "react";
import Header from "./header";
import PostWrapper from "./postwrapper";

import "../css/style.css";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { picval: "/images/mountain.jpg" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ picval: event.target.value });
  }

  onChange = (e) => {
    console.log("file to upload:", e.target.files[0]);
    var fileExt = e.target.files[0].name.split('.').pop();
    this.setState({
        fileExt: fileExt
      });
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  };

  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    this.setState({
      base64TextString: btoa(binaryString),
    });
  };

  onFileSubmit = (e) => {
    e.preventDefault();
    let payload = {
      title: "test",
      text: "test text",
      base64Image: `data:image/${this.state.fileExt};base64, ${this.state.base64TextString}`,
    };
    fetch("http://localhost:3001/api/post/create", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
    .then(json => console.log(json));
  };

  render() {
    return (
      <div>
        <Header />
        <div class="page">
          <div id="postPreviews">
            <form
              onChange={(e) => this.onChange(e)}
              onSubmit={(e) => this.onFileSubmit(e)}
            >
              {/* <input type="text"></input>
              <input type="text"></input> */}
              <input
                type="file"
                name="image"
                id="file"
                accept=".jpeg, .png, jpg"
              ></input>
              <input type="submit"></input>
            </form>
            <form action="newhomepage.html">
              <label for="images">Choose a Image:</label>
              <select
                value={this.state.picval}
                onChange={this.handleChange}
                id="images"
                name="img"
              >
                <option value="/images/kitty.webp">Kitty</option>
                <option value="/images/rit.jpg">RIT</option>
                <option value="/images/code.jpg">Code</option>
                <option value="/images/mountain.jpg">Mountain</option>
              </select>
              <img id="output" src={this.state.picval} class="center" />
              <p></p>
              <textarea
                id="textDetails"
                name="text"
                rows="4"
                cols="50"
                class="center"
              />
              <input type="submit" value="Post" id="submit" />
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
