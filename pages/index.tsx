import styles from '@/styles/Home.module.scss'
import type { ReactElement } from 'react'
import RootLayout from './layout'

export default function Home() {
  return (
   <div className={styles['home-section']}>
      <h1>HOME</h1>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
