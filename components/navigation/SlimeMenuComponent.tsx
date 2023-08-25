'use client'
import NavigationMobileComponent from "./NavigationMobileComponent";
import styles from "./../Component.module.css"
import { useMenuContext } from "@/contexts/MenuContext";
import Image from "next/image";

export default function SlimeMenuComponent() {

    const { menuState } = useMenuContext()

    return (
        <div className={menuState ? styles.menu_movil : styles.menu_movil_show}>
            <NavigationMobileComponent />
            <Image alt="Logo From Rick And Morty" src="/slimeheader.png" className="slime" width="0" height="0" sizes="100vw" />
        </div>
    )
}