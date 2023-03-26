import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components'

const Home = () => {
  const [text, setText] = useState<string>('Hello From Next')

  const updateText = () => {
    setText('Updated Text')
    // h1Ref.current.innerHTML = 'Updated Text'
  }

  return (
    <>
      <Header />
      <h1>{text}</h1>
      <Link href="/blog">Go to Blog</Link>
      <button onClick={updateText}>Update Text</button>
    </>
  )
}

export default Home