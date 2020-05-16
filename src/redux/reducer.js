const ADD_NUMBER = 'ADD_NUMBER'
const RESET_NUMBER = 'RESET_NUMBER'
const SET_NUMBER = 'SET_NUMBER'
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE'

const initialState = {
    currentValue: 0,
    maxValue: 6,
    minValue: 0,
    errorSet: 'Incorrect value',
    warningSet: "Enter value and press \'Set\'"
}

const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_NUMBER:
            debugger
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        case RESET_NUMBER:
            return {
                ...state,
                currentValue: state.minValue
            }
        case SET_NUMBER:
            return {
                ...state,
                currentValue: state.minValue
            }
        case CHANGE_MAX_VALUE:
            const newErrorMax = state.minValue >= action.maxValue? state.errorSet: state.warningSet
            const newMaxValue = 0 > action.maxValue? state.maxValue: action.maxValue
            return {
                ...state,
                currentValue: newErrorMax,
                maxValue: newMaxValue
            }
        case CHANGE_MIN_VALUE:
            const newErrorMin = state.maxValue <= action.minValue? state.errorSet: state.warningSet
            const newMinValue = 0 <= action.minValue ? action.minValue: state.minValue
            return {
                ...state,
                currentValue: newErrorMin,
                minValue: newMinValue
            }
        default:
            return state
    }
}

export const addNumber = () => ({type: ADD_NUMBER})
export const resetNumber = () => ({type: RESET_NUMBER})
export const setNumbers = () => ({type: SET_NUMBER})
export const changeMaxValueAC = (maxValue) => ({type: CHANGE_MAX_VALUE, maxValue})
export const changeMinValueAC = (minValue) => ({type: CHANGE_MIN_VALUE, minValue})

export default reducer;