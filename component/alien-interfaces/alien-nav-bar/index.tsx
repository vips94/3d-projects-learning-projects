import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './alienNavBar.module.scss';

const AlienNavBar = () => {
    const pathname = usePathname();

    console.log(pathname)
    return(
        <nav className={styles['navbar-section']}>
            <Link className={`${styles['nav-item']} ${pathname.includes('/behance-dribbble') ? styles['nav-item-active']:''}`} href={'/alien-interfaces/behance-dribbble'}>Dribbble</Link>
            <Link className={`${styles['nav-item']} ${pathname.includes('/treats') ? styles['nav-item-active']:''}`} href={'/alien-interfaces/treats'}>Treats</Link>
        </nav>
    )
}

export default AlienNavBar;