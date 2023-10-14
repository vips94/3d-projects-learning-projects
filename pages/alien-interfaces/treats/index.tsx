import React,{ReactElement} from 'react';
import RootLayout from '@/pages/layout';
import Layout from '../layout';
import styles from './treats.module.scss';

const Treats = () => {
    return (
        <div className={styles['alien-dribbble-section']}>
            <h1>Treats</h1>
        </div>
    );
};

Treats.getLayout = function getLayout(page: ReactElement) {
    return (
      <RootLayout>
        <Layout>
        {page}
        </Layout>
      </RootLayout>
    )
}

export default Treats;