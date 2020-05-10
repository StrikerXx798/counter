import React from 'react';
import './NumberCount.css';

class NumberCount extends React.Component {
    render = (props) => {
        let numberMax = this.props.currentValue === this.props.maxValue || this.props.currentValue === 'Incorrect value' ? "maxFilter" : "numberCount";

        return (
            <div className = {numberMax}>
                <span> {this.props.currentValue} </span>
            </div>
        );
    };
}

export default NumberCount;
