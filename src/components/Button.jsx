import React from 'react';
import classes from './Button.module.css'

class Button extends React.Component {
    render = () => {
        return (
            <button className={classes.button} onClick={this.props.funcItem} disabled={this.props.disable}>
                {this.props.buttonName}
            </button>
        );
    };
}

export default Button;
