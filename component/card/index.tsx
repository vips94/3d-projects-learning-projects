import React,{FC} from 'react';
import styles from './card.module.scss';

type CardProps = {
    img: string;
    hoverImg: string;
    logo: string;
}

const Card:FC<CardProps> = ({img,hoverImg,logo}) => {
    return(
        <div className={styles['card']}>
            <div className={styles['fg']}>
                <img className={styles['img']} src={img}/>
            </div>
            <img className={styles['hoverImg']} src={hoverImg}/>
            <img className={styles['logo']} src={logo}/>
        </div>
    )
}

export default Card;