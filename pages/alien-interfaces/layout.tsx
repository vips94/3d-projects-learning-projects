import React,{FC} from 'react';
import styles from '@/styles/layout.module.scss';
import AlienNavBar from "@/component/alien-interfaces/alien-nav-bar";

type LayoutProps = {
    children: any;
}

const Layout:FC<LayoutProps> = ({ children }) => {
    return(
        <div className={styles['alien-layout-container']}>
            <AlienNavBar/>
            {children}
        </div>
    )
}   

export default Layout;