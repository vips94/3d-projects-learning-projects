import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './navBar.module.scss';

const NavBar = () => {
    const pathname = usePathname();

    console.log(pathname)
    return(
        <nav className={styles['navbar-section']}>
            <Link className={`${styles['nav-item']} ${pathname === '/3D-card' ? styles['nav-item-active']:''}`} href={'/3D-card'}>3D-Card</Link>
            <Link className={`${styles['nav-item']} ${pathname === '/' ? styles['nav-item-active']:''}`} href={'/'}>Home</Link>
            <Link className={`${styles['nav-item']} ${pathname.includes('/alien-interfaces') ? styles['nav-item-active']:''}`} href={'/alien-interfaces'}>Alien UI</Link>
            <Link className={`${styles['nav-item']} ${pathname.includes('/parallex') ? styles['nav-item-active']:''}`} href={'/parallex'}>Parallex</Link>
            <Link className={`${styles['nav-item']} ${pathname.includes('/canvas') ? styles['nav-item-active']:''}`} href={'/canvas'}>Canvas</Link>
        </nav>
    )
}

export default NavBar;