import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Header } from '@/components'
import { User } from '../utils/interfaces'

const Home = () => {
  const [text, setText] = useState<string>('Hello From Next')
  const user: User = useSelector((state: any) => state?.authReducer?.user)
  const router = useRouter()

  console.log('user', user)

  useEffect(() => {
    if (!user?.id) {
      router.push('/login')
    }
  }, [])

  const updateText = () => {
    setText('Updated Text')
    // h1Ref.current.innerHTML = 'Updated Text'
  }

  return (
    <>
      <Header />
      <h1>{text}</h1>
      <h2>Hello {user?.fullName}</h2>
      <Link href="/blog">Go to Blog</Link>
      <button onClick={updateText}>Update Text</button>
    </>
  )
}

export default Home