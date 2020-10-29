import React from 'react';
import PostWrapper from './postwrapper';

import '../css/style.css'

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karma: this.props.karma,
            numcomments: this.props.numcomments,
            numreplies: this.props.numreplies
        }
    }

    approve() {
        alert("Approve");
    }

    reject() {
        alert("Reject");
    }

    render () {
        return (
            <div style={{color: "white"}}>
                {/** Need to load in */}
                <PostWrapper title="{this.props.title}"
                      karma="{this.props.karma}"
                      desc="{this.props.desc}"
                      image="/images/kitty.webp"
                />
                <div id="reportBlockContainer">
                    <div id="reportReason">
                        <p style={{fontSize: "large", color: "red"}}>Report Reason:</p> <p style={{fontSize:"large", color:"white"}}>I hate cats</p>
                    </div>
                    <div id="reportButtons">
                        <img id="approve" src="images/check.png" style={{width:"50px",height:"50px",margin:"10px"}} onClick={this.approve} />
                        <img id="reject" src="images/cross.png" style={{width:"50px", height:"{50px", margin:"10px"}} onClick={this.reject} />
                    </div>
                    <div id="reportsBar">
                        <p>USER REPORTS</p>
                        <img id="kittyReport" src="images/kitty.webp" alt="catReport" style={{width:"150px",height:"100px"}} />
                        <p>I Hate Cats</p>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Report;