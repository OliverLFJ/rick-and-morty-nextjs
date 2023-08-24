import Link from "next/link"
import styles from "./../Component.module.css"

export default function NavigationMobileComponent() {
    const links = [
        { label: 'Home', route: '/' },
        { label: 'Character', route: '/character' },
        { label: 'Episode', route: '/episode' },
        { label: 'Location', route: '/location' },
    ]
    return (
        <>
            <ul className={styles.menu_mobile_option}>
                {links.map((item: any) => (
                    <li key={item.label}>
                        <Link href={item.route} className={styles.option_menu}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}