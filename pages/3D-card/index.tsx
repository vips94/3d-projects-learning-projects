import styles from './3D-card.module.scss';
import Card from '@/component/card';
import Layout from '../layout';
import type {ReactElement} from 'react';

export default function Card3D () {
  return (
   <div className={styles['card-3d-section']}>
        <h1>3D CARDS</h1>
        <h3>Hover Over the cards to see the effects</h3>
        <div className={styles['card-container']}>
            <Card img='/images/3d-images/dark_rider-cover.jpg' hoverImg='/images/3d-images/dark_rider-character.webp' logo='/images/3d-images/dark_rider-title.png'/>
            <Card img='/images/3d-images/force_mage-cover.jpg' hoverImg='/images/3d-images/force_mage-character.webp' logo='/images/3d-images/force_mage-title.png'/>
        </div>
    </div>
  )
}

Card3D.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}