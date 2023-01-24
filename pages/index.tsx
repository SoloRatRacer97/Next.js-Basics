// Recall that we should be using the Link tag here and not the a tag since the a tak will make the page refresh where as the Link tag will perserve that state. 

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Hello World :D</h1>
        <ul>
          <li>
            <Link href='/portfolio'>Link to portfolio</Link>
          </li>
          <li>
            <Link href='/clients'></Link>
          </li> 
        </ul>
      </main>
    </>
  )
}
