import React,{FC} from 'react';
import styles from './cards.module.scss';

const Cards:FC<propTypes> = props => {
    const {img} = props;
    return (
        <div className={styles['card-section']}>
            
        </div>
    );
};

type propTypes = {
    img: string,
};

export default Cards;