import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/CounterSlice'
import { clear, add } from '../features/ToDoSlice'


function Counter() {
    // Call useSelector to grab the current value of our state variables
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.counter.value)
    const todoList = useSelector((state) => state.todo.items)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    //state variables in the UI
    const [input, setInput] = useState(0)
    //sets a state variable for the todo list
    const [toDoInput, setTodo] = useState([])

    //runs the dispatch on click
    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }
    //runs this TODO dispatch on click
    const addTodo = (e) => {
        e.preventDefault()
        dispatch(add(toDoInput))
        console.log(todoList)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={(e) => addTodo(e)}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
            <div>
                <ul>
                    {todoList.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            <button
                aria-label="Clear Todo"
                onClick={() => dispatch(clear())}>
                Clear To Do
            </button>
        </div>
    )
}

export default Counter

