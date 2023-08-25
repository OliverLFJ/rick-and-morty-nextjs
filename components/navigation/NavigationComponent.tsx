import Link from "next/link"
import styles from "./../Component.module.css"
import { usePathname } from 'next/navigation'

export default function NavigationComponent() {
    const pathname = usePathname()

    const links = [
        { label: 'Home', route: '/' },
        { label: 'Character', route: '/character' },
        { label: 'Episode', route: '/episode' },
        { label: 'Location', route: '/location' },
    ]

    return (
        <>
            <ul className={styles.menu}>
                {links.map((item: any) => (
                    <li key={item.label}>
                        <Link href={item.route} className={`${styles.option_menu} ${pathname === item.route ? styles.active_option : ''
                            }`}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}