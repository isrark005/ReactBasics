import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
        fhsfgh
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComple: (id) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider