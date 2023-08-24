import Image from "next/image";
import styles from "./../Component.module.css"
import NavigationComponent from "./NavigationComponent";

export default function NavbarComponent() {
    return (
        <header className={styles.header}>
            <Image alt="Logo From Rick And Morty" width={300} height={100} src="/logo.png" />
            <NavigationComponent />
        </header>
    )
}