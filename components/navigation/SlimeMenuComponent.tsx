'use client'
import NavigationMobileComponent from "./NavigationMobileComponent";
import styles from "./../Component.module.css"
import { useMenuContext } from "@/contexts/MenuContext";

export default function SlimeMenuComponent() {

    const { menuState } = useMenuContext()

    return (
        <div className={menuState?styles.menu_movil:styles.menu_movil_show}>
            <NavigationMobileComponent />
            <img alt="Logo From Rick And Morty" src="/slimeheader.png" className="slime" />
        </div>
    )
}