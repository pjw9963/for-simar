import React, { Component } from 'react';
import Header from './header';
import PostWrapper from './postwrapper';

import '../css/style.css';
import Report from './report';

class ReportsPage extends Component {
  
    render() {
    return (
        <div>
            <Header />
            <div class="page" style={{color: "white"}}>
                <h1>Reports</h1>
                <Report />
            </div>
        </div>
    );
  }

}

export default ReportsPage;