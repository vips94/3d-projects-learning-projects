import NavBar from "@/component/nav-bar";
import React,{FC} from 'react';
import styles from '@/styles/layout.module.scss';

type LayoutProps = {
    children: any;
}

const RootLayout:FC<LayoutProps> = ({ children }) => {
    return(
        <div className={styles['layout-container']}>
            <NavBar/>
            <main>{children}</main>
        </div>
    )
}   

export default RootLayout;