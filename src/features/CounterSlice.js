import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    //similar to our switch statement in the Redux reducer 
    reducers: {
        increment: (state) => {
            return { value: state.value + 1 }
        },
        decrement: (state) => {
            return { value: state.value - 1 }
        },
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        },
        default: (state) => {
            return { value: state.value }
        }
    }
})
// a little helpful redundancy in the exports

//exports the functions
export const { increment, decrement, incrementByAmount } = counterSlice.actions
//exports the component and reducer
export default counterSlice.reducer