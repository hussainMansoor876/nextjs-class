import Link from 'next/link'
import { Header } from '@/components'

const Home = () => {
  return (
    <>
      <Header />
      <h1>Hello From Next</h1>
      <Link href="/blog">Go to Blog</Link>
    </>
  )
}

export default Home