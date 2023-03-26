import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { DisplayTodo } from '@/components'

// interface TodoObject {
//     completed: boolean;
//     title: string;
//     userId: number;
//     id: number;
// }

// interface ApiObject {
//     data: TodoObject[];
//     isLoading: boolean;
//     error: any;
// }

const fetcher = (url: string): any => fetch(url).then(r => r.json())
// const fetcher: Fetcher<User, string> = (id) => getUserById(id)

const Todos = () => {
    const [todos, setTodos] = useState<any[]>([])
    const [todo, setTodo] = useState<string>('')
    const { data, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

    useEffect(() => {
        if (!isLoading) {
            // setTodos([...data])
        }
    }, [data, isLoading])

    const addTodo = () => {
        let obj: object = {
            completed: false,
            title: todo,
            userId: 1,
            id: todos?.length + 1
        }

        todos.push(obj)
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
            <ol>
                {todos?.map((v, i) => {
                    return (
                        <DisplayTodo todo={v} key={i} />
                    )
                })}
            </ol>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Todos