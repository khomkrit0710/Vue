import { v4 as uuid } from 'uuid'
import { useState } from '#app'

interface TodoListItem {
    id: string
    title: string
    done: boolean
}

interface TodoList {
    id: string
    title: string
    item: TodoListItem[]
}

export function useTodo() {
    const todos = useState<TodoList[]>('todos', () => [])

    function addTodo(title: string) {
        todos.value.push({
            id: uuid(),
            title,
            item:[]
        })
    }

    function updateTodoTitle(id: string, newTitle: string) {
        const todo = todos.value.find((todo) => todo.id === id)
        if (todo) {
            todo.title = newTitle
        }
    }

    function removeTodo(id: string) {
        todos.value = todos.value.filter((todo) => todo.id !== id)
    }
    
    return {
        todos,
        addTodo,
        updateTodoTitle,
        removeTodo
    }
    
}