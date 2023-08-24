import Image from "next/image";
import styles from "./../Component.module.css"
import NavigationComponent from "./NavigationComponent";
import MenuIconsComponent from "../utils/MenuIconsComponent";
import { MenuContextProvider, useMenuContext } from "@/contexts/MenuContext";
import SlimeMenuComponent from "./SlimeMenuComponent";

export default function NavbarComponent() {

    return (
        <>
            <MenuContextProvider>
                <header className={styles.header}>
                    <Image alt="Logo From Rick And Morty" width={300} height={100} src="/logo.png" className={styles.image_logo} />
                    <NavigationComponent />
                    <MenuIconsComponent />
                </header>
                <SlimeMenuComponent/>
            </MenuContextProvider>
        </>
    )
}