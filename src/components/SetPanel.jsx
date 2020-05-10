import React from 'react';
import s from './SetPanel.module.css';
import Button from "./Button";

class SetPanel extends React.Component {


    render = () => {
        let styleInput = this.props.state.currentValue === 'Incorrect value' ? s.inputError : s.input;
        return (
            <div className={s.setPanel}>
                <div className={s.setInput}>
                    <div className={s.max}>
                        Max Value:
                        <input className={styleInput} type="number" value={this.props.state.maxValue} onChange={this.props.changeMaxValue}/>
                    </div>
                    <div>
                        Start Value:
                        <input className={styleInput} type="number" value={this.props.state.minValue} onChange={this.props.changeMinValue}/>
                    </div>
                </div>
                <div className={s.buttons}>
                    <Button buttonName={'Set'} funcItem={this.props.setNumbers} disable={this.props.disabledSet}/>
                </div>
            </div>
        );
    };
}

export default SetPanel;
