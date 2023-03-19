import Link from 'next/link'
import { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log('Empty useEffect')

        return () => console.log('Unmounted')
    }, [])

    useEffect(() => {
        console.log('useEffect counter ', counter)
    }, [counter])

    const increamentCount = (): void => {
        setCounter(counter + 1)
    }

    const decreamentCount = (): void => {
        setCounter(!counter ? 0 : counter - 1)
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={increamentCount}>Increase</button>
            <br />
            <br />
            <button onClick={decreamentCount}>Decrease</button>
            <br />
            <Link href={'/blog'}>Blog</Link>
        </>
    )
}

export default Counter