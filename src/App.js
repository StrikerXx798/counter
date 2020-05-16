import React from 'react';
import s from './App.module.css';
import Counter from "./components/Counter";
import SetPanel from "./components/SetPanel";
import {connect} from "react-redux";
import {addNumber, resetNumber, setNumbers} from "./redux/reducer";

class App extends React.Component {
    addNumber = () => {
        this.props.addNumber();
    };

    resetNumber = () => {
        this.props.resetNumber();
    }

    setNumbers = () => {
        this.props.setNumbers();
    }

    render = () => {
        let disabledSet = this.props.maxValue === this.props.minValue || this.props.minValue < 0 || this.props.maxValue < 0 || this.props.minValue > this.props.maxValue;
        let disabledInc = this.props.currentValue === this.props.maxValue || this.props.currentValue === 'Incorrect value' || this.props.currentValue === 'Enter value and press \'Set\'';
        let disabledRes = this.props.currentValue === this.props.minValue || this.props.currentValue === 'Incorrect value' || this.props.currentValue === 'Enter value and press \'Set\'';

        return (
            <div className={s.App}>
                <SetPanel
                          disabledSet={disabledSet}
                          changeMinValue={this.changeMinValue}
                          setNumbers={this.setNumbers}
                />
                <Counter
                         disabledInc={disabledInc}
                         disabledRes={disabledRes}
                         addNumber={this.addNumber}
                         resetNumber={this.resetNumber}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue,
        maxValue: state.maxValue,
        minValue: state.minValue
    }
}

const ContainedApp = connect (mapStateToProps, {addNumber, resetNumber, setNumbers}) (App)

export default ContainedApp;
