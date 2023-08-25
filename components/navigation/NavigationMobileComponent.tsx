import Link from "next/link"
import styles from "./../Component.module.css"
import { useMenuContext } from "@/contexts/MenuContext"
import { usePathname } from 'next/navigation'

export default function NavigationMobileComponent() {
    const links = [
        { label: 'Home', route: '/' },
        { label: 'Character', route: '/character' },
        { label: 'Episode', route: '/episode' },
        { label: 'Location', route: '/location' },
    ]

    const { setMenuState } = useMenuContext()
    const pathname = usePathname()

    return (
        <>
            <ul className={styles.menu_mobile_option}>
                {links.map((item: any) => (
                    <li key={item.label}>
                        <Link href={item.route} className={`${styles.option_menu} ${pathname === item.route ? styles.active_option : ''
                            }`} onClick={() => setMenuState(false)}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}