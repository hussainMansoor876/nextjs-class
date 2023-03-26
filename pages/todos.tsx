import { useState, useEffect, useRef } from 'react'
import useSWR from 'swr'
import { DisplayTodo } from '@/components'
import { useRouter } from 'next/router'

const fetcher = (url: string): any => fetch(url).then(r => r.json())

const Todos = () => {
    const [todos, setTodos] = useState<any[]>([])
    const [todo, setTodo] = useState<string>('')
    const inputRef = useRef<any>(null)
    const router = useRouter()
    const { data, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

    useEffect(() => {
        if (!isLoading) {
            // setTodos([...data])
        }
    }, [data, isLoading])

    const addTodo = () => {
        if (!todo) {
            return
        }
        let obj: object = {
            completed: false,
            title: todo,
            userId: 1,
            id: todos?.length + 1
        }

        todos.push(obj)
        setTodos([...todos])

        setTodo('')
        inputRef.current.focus()
    }

    return (
        <>
            <button onClick={() => router.back()}>Go Back</button>
            <button onClick={() => router.push('/blog')}>Blog</button>
            <button onClick={() => router.replace('/')}>Home</button>
            <button onClick={() => router.reload()}>Reload</button>
            <h1>Todo</h1>
            <input
                placeholder="Input Task"
                onChange={(e) => setTodo(e?.target?.value)}
                value={todo}
                ref={inputRef}
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