import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    //similar to our switch statement in the Redux reducer 
    reducers: {
        clear: () => {
            return { items: [] }
        },
        add: (state, newItem) => {
            return {
                items: [...state.items, { newItem }]
            }
        },
        default: (state) => {
            return { items: ["test", "test1"] }
        }
    }
})
// a little helpful redundancy in the exports

//exports the functions
export const { clear, add } = toDoSlice.actions
//exports the component and reducer
export default toDoSlice.reducer