import {ADD_TODO, REMOVE_TODO} from './actionTypes'

let nextId = 0
export const addTodo = (notes) => ({
    type: ADD_TODO,
    id:nextId++,
    title:notes.title,
    content:notes.content,
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})