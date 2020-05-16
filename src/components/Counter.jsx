import React from 'react';
import s from './Counter.module.css'
import NumberCount from './NumberCount'
import Button from "./Button";

class Counter extends React.Component {
    render = () => {
        return (
            <div className={s.counter}>
                <NumberCount
                    styleCounter={this.props.styleCounter}
                />
                <div className={s.buttons}>
                    <Button disable={this.props.disabledInc}
                            buttonName={'Inc'}
                            funcItem={this.props.addNumber}/>
                    <Button disable={this.props.disabledRes}
                            buttonName={'Reset'}
                            funcItem={this.props.resetNumber}/>
                </div>
            </div>
        );
    };
}

export default Counter;
