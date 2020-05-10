import React from 'react';
import s from './App.module.css';
import Counter from "./components/Counter";
import SetPanel from "./components/SetPanel";

class App extends React.Component {
    state = {
        currentValue: 0,
        stepCounter: 1,
        maxValue: 5,
        minValue: 0
    }

    componentDidMount() {
        let str = localStorage.getItem('counter');
        let obj = JSON.parse(str)
        this.setState(obj)
    }


    addNumber = () => {
        this.setState({
            currentValue: this.state.currentValue + this.state.stepCounter
        })
    };

    resetNumber = () => {
        this.setState({
            currentValue: this.state.minValue
        })
    }

    changeMaxValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        if (newValue < 0 || newValue <= this.state.minValue || this.state.minValue < 0) {
            this.setState({
                maxValue: newValue,
                currentValue: 'Incorrect value'
            }, () => {
                this.saveState()
            })
        } else {
            this.setState({
                maxValue: newValue,
                currentValue: 'Enter value and press \'Set\''
            }, () => {
                this.saveState()
            })
        }
    }

    changeMinValue = (e) => {
        let newMinValue = Number(e.currentTarget.value);
        if (newMinValue < 0 || newMinValue >= this.state.maxValue) {
            this.setState({
                minValue: newMinValue,
                currentValue: 'Incorrect value'
            }, () => {
                this.saveState()
            })
        } else {
            this.setState({
                minValue: newMinValue,
                currentValue: 'Enter value and press \'Set\''
            }, () => {
                this.saveState()
            })
        }
    }

    setNumbers = () => {
        this.setState({
            currentValue: this.state.minValue
        })
    }

    saveState = () => {
        let ssd = JSON.stringify(this.state)
        localStorage.setItem('counter', ssd)
    }

    render = () => {
        let disabledSet = this.state.maxValue === this.state.minValue || this.state.minValue < 0 || this.state.maxValue < 0 || this.state.minValue > this.state.maxValue;
        let disabledInc = this.state.currentValue === this.state.maxValue || this.state.currentValue === 'Incorrect value' || this.state.currentValue === 'Enter value and press \'Set\'';
        let disabledRes = this.state.currentValue === this.state.minValue || this.state.currentValue === 'Incorrect value' || this.state.currentValue === 'Enter value and press \'Set\'';

        return (
            <div className={s.App}>
                <SetPanel state={this.state}
                          disabledSet={disabledSet}
                          changeMinValue={this.changeMinValue}
                          setNumbers={this.setNumbers}
                          changeMaxValue={this.changeMaxValue}/>
                <Counter state={this.state}
                         disabledInc={disabledInc}
                         disabledRes={disabledRes}
                         addNumber={this.addNumber}
                         resetNumber={this.resetNumber} />
            </div>
        );
    };
}

export default App;
