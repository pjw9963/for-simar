import React from 'react';

import styles from '../css/messagepreview.module.css'

class MessagePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    loadMessage () {
        alert("Load Message");
    }

    render () {
        return (
            <div className={styles.MessagePreview}>
                <div onClick={() => {this.loadMessage()}}>
                    <span class="ylo" style={{paddingRight: "0.5em"}}>${this.props.name}:</span>
                    <span class="msg-preview">{this.props.preview}</span>
                    <hr/>
                </div>
                
            </div>
            
        );
    }
}
export default MessagePreview;