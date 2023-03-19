import { useEffect } from 'react'

const DisplayTodo = (props: any) => {
    const { todo }: any = props

    useEffect(() => {
        console.log('useEffect todo', todo)
    }, [])

    return (
        <p>{todo}</p>
    )
}

export default DisplayTodo