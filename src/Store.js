import { configureStore } from '@reduxjs/toolkit'
//imports the default reducer from CounterSlice
import counterReducer from './features/CounterSlice'
import toDoReducer from './features/ToDoSlice'
//exports the store with the entire counterReducer
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: toDoReducer
    }
})

