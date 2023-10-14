import styles from './alienInterfaces.module.scss';
import Layout from './layout';
import RootLayout from '../layout';
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app';
 
const AlienInterfaces: NextPageWithLayout = () => {
    return (
        <div className={styles['alien-interfaces-section']}>
            <h1>Select Any Of the Following Menu From the Top</h1>
            <a href='https://alieninterfaces.com' target='_blank'>Go to Alien Interface</a>
        </div>
    )
  }

AlienInterfaces.getLayout = function getLayout(page: ReactElement) {
    return (
      <RootLayout>
        <Layout>
        {page}
        </Layout>
      </RootLayout>
    )
}



export default AlienInterfaces;