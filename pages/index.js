import MainLayout from '@/components/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>


      <p>
        ir a
        <Link href="/about">
          about
        </Link>
      </p>



    </MainLayout>
  )
}
