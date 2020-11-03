import React, { Component } from "react";
import Header from "./header";
import MessagePreview from "./messagepreview";
import PageNavigation from "./pagenavigation";


import styles from "../css/messagepreview.module.css";
import "../css/style.css";

class Messages extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ textAlign: "center", color:"black" }}>
            <PageNavigation />
          </div>
        <div class="page" className={styles.MessagePreview}>

          <div class="inner-border">
            <h2>Messages</h2>
            <hr />
            <ul
              style={{
                textAlign: "left",
                paddingLeft: "1em",
                paddingRight: "1em",
              }}
            >
              <li>
                <MessagePreview name="Johnathan01" preview="Hey what's up?" />
              </li>
              <li>
                <MessagePreview
                  name="dje3333"
                  preview="no i won't spam /cats with car memes"
                />
              </li>
              <li>
                <MessagePreview
                  name="JIMMYJOHNS_PIZZA"
                  preview="buy my pizza"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
