import React from 'react';
import './NumberCount.css';
import {connect} from "react-redux";

class NumberCount extends React.Component {
    render = () => {
        let numberMax = this.props.currentValue >= this.props.maxValue || this.props.currentValue === 'Incorrect value' ? "maxFilter" : "numberCount";
        return (
            <div className = {numberMax}>
                <span> {this.props.currentValue} </span>
            </div>
        );
    };
}

const  mstp = (state) => {
    return {
        maxValue: state.maxValue,
        currentValue: state.currentValue
    }
}


export default connect(mstp)(NumberCount);
