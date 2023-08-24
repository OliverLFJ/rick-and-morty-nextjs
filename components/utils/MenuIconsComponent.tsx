'use client'
import { TiThMenuOutline, TiThMenu } from "react-icons/ti";
import styles from "./../Component.module.css"
import { useMenuContext } from "@/contexts/MenuContext";

export default function MenuIconsComponent() {

    const { setMenuState, menuState } = useMenuContext()

    return (
        <div className={styles.icons_menu}>
            <TiThMenuOutline className={menuState ? styles.open_menu_hidden : styles.open_menu} onClick={() => setMenuState(!menuState)} />
            <TiThMenu className={menuState ? styles.close_menu : styles.close_menu_hidden} onClick={() => setMenuState(!menuState)} />
        </div>
    )
}