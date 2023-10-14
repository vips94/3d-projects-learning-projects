import React,{ReactElement} from 'react';
import RootLayout from '@/pages/layout';
import Layout from '../layout';
import styles from './behanceDribbble.module.scss';
import Carousel from '@/component/alien-interfaces/dribbble_carousel';

const BehanceDribbble = () => {
    const carouselItems = [
        <div key={1} className="carousel-content">Item 1</div>,
        <div key={2} className="carousel-content">Item 2</div>,
        <div key={3} className="carousel-content">Item 3</div>,
        // Add more items as needed
      ];
    
      return (
        <div className={styles['alien-dribbble-section']}>
          <h1>Horizontal Carousel with GSAP</h1>
          <Carousel items={carouselItems} />
        </div>
      );
};

BehanceDribbble.getLayout = function getLayout(page: ReactElement) {
    return (
      <RootLayout>
        <Layout>
        {page}
        </Layout>
      </RootLayout>
    )
}

export default BehanceDribbble;