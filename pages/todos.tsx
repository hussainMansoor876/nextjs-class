import { useState } from 'react'
import { DisplayTodo } from '@/components'

const Todos = () => {
    const [todos, setTodos] = useState<string[]>([])
    const [todo, setTodo] = useState<string>('')

    const addTodo = () => {
        todos.push(todo)

        setTodos([...todos])

        setTodo('')
    }

    return (
        <>
            <h1>Todo</h1>
            <input
                placeholder="Input Task"
                onChange={(e) => setTodo(e?.target?.value)}
                value={todo}
            />&nbsp;
            <button onClick={addTodo}>Add Todo</button>
            <br />
            <br />
            <br />
            {todos?.map((v, i) => {
                return (
                    <DisplayTodo todo={v} key={i} />
                )
            })}
        </>
    )
}

export default Todos