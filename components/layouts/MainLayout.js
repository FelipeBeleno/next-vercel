import Head from 'next/head'
import styles from './Layout.module.css'
import { Navbar } from '../Navbar'
import Link from 'next/link'

export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <title>Home  - Felipe</title>
                <meta name="description" content="Home - Felipe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main >
        </>
    )
}

