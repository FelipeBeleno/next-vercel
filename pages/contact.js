import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <MainLayout>
            <h1>Contact</h1>
            <div >

                <p>
                    ir a
                    <Link href="/about">
                        about
                    </Link>
                </p>

            </div>
        </MainLayout>
    )
}
