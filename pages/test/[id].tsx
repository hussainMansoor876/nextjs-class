import { Header } from '@/components'
import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()

  return (
    <>
      <Header />
      <h1>{router?.query?.id?.toLocaleString()?.toLocaleUpperCase()} Page</h1>
    </>
  )
}

export default Blog