import styles from './Navbar.module.css'
import ActivateLink from "./ActivateLink";



const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    }

];
export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map((m, i) => {
                    return <ActivateLink
                        key={i}
                        texto={m.text}
                        href={m.href} />
                })
            }
        </nav>
    )
}

