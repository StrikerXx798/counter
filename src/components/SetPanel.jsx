import React from 'react';
import s from './SetPanel.module.css';
import Button from "./Button";
import {connect} from "react-redux";
import {changeMaxValueAC, changeMinValueAC} from "../redux/reducer";

class SetPanel extends React.Component {
    changeMaxValue = (e) => {
        let newValue = Number(e.currentTarget.value)
        this.props.changeMaxValue(newValue)
    }

    changeMinValue = (e) => {
        let newValue = Number(e.currentTarget.value)
        this.props.changeMinValue(newValue)
    }

    render = () => {
        let styleInput = this.props.currentValue === 'Incorrect value' ? s.inputError : s.input;
        return (
            <div className={s.setPanel}>
                <div className={s.setInput}>
                    <div className={s.max}>
                        Max Value:
                        <input className={styleInput} type="number" value={this.props.maxValue} onChange={this.changeMaxValue}/>
                    </div>
                    <div>
                        Start Value:
                        <input className={styleInput} type="number" value={this.props.minValue} onChange={this.changeMinValue}/>
                    </div>
                </div>
                <div className={s.buttons}>
                    <Button buttonName={'Set'} funcItem={this.props.setNumbers} disable={this.props.disabledSet}/>
                </div>
            </div>
        );
    };
}

const  mstp = (state) => {
    return {
        currentValue: state.currentValue,
        maxValue: state.maxValue,
        minValue: state.minValue
    }
}

const  mdtp = (dispatch) => {
    return {
        changeMaxValue: (maxValue) => {
            dispatch(changeMaxValueAC(maxValue))
        },
        changeMinValue: (minValue) => {
            dispatch(changeMinValueAC(minValue))
        }
    }
}

export default connect(mstp, mdtp)(SetPanel);
