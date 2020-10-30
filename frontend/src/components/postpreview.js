import React, { Component } from "react";
import Header from "./header";
import PostWrapper from "./postwrapper";
import PageNavigation from "./pagenavigation";

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
    if (e.target.files) {
      var fileExt = e.target.files[0].name.split(".").pop();
      this.setState({
        fileExt: fileExt,
      });
      let file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
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
      title: this.state.title,
      text: this.state.text,
      base64Image: `data:image/${this.state.fileExt};base64, ${this.state.base64TextString}`,
    };
    fetch("http://localhost:3001/api/post/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  textChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <div class="page">
        <PageNavigation/>
          <div id="postPreviews">
            <form
              onChange={(e) => this.onChange(e)}
              onSubmit={(e) => this.onFileSubmit(e)}
            >
              <div class="v-spacing">
                <label for="title">Post Title: </label>
                <input
                  name="title"
                  onChange={this.titleChange}
                  type="text"
                ></input>
              </div>
              <div class="v-spacing">
                <label for="text">Post Text Content: </label>
                <input
                  name="text"
                  onChange={this.textChange}
                  type="text"
                ></input>
              </div>
              <div class="v-spacing">
                <input
                  type="file"
                  name="image"
                  id="file"
                  accept=".jpeg, .png, jpg"
                ></input>
              </div>
              <div class="v-spacing">
                <input type="submit" value="Create Post"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostPreview;
