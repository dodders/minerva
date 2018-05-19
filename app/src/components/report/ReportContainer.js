import React, { Component } from 'react';
import './../../App.css';
import './Report';
import Report from './Report';

class ReportContainer extends Component {
    render() {
        return(
            <div>
                <p>Report Container</p><br/>
                <Report/>
            </div>
        );
    }
}

export default ReportContainer;