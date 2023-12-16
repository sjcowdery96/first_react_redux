import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/CounterSlice'
import { clear, add } from '../features/ToDoSlice'
const list = document.getElementById('list')

function Counter() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.counter.value)
    const todoList = useSelector((state) => state.todo.items)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    //state variables in the UI
    const [input, setInput] = useState(0)
    //sets a state variable for the todo list
    const [toDoInput, setTodo] = useState(["complete assignment"])

    //runs the dispatch on click
    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }
    //runs this TODO dispatch on click
    const addTodo = (e) => {
        e.preventDefault()
        dispatch(add(String(toDoInput)))
    }
    ///CHALLENGES HERE -- cannot render/append to NULL... FAUUUUU!!
    //this is where we actually render the HTML components from the store state data
    const renderList = (state) => {
        //every time we render the list, we need to clear the original HTML elements
        //good 'ol forEach loop to create a list element for each
        state.forEach(listItem => {
            // Generate a new list element for each grocery item
            let li = document.createElement('li')
            // Append the new element to our list DOM element, we targeted
            // it at the beginning of this code-along!

            ///THIS IS THE PROBLEM RIGHT HERE.
            list.appendChild(li)
            // Populate the text content of the list item
            li.textContent = listItem.text
        })
    }

    //now we actually build a render function to fire every time things change
    const render = () => {
        //const state = store.todo
        //renderList(state)
    }

    //store.subscribe(render)

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
                <ul id="list">
                    {renderList(todoList)}
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

