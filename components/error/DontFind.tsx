import styles from "./../Component.module.css"

export default function DontFind() {
    return (
        <div className={styles.container_component}>
            <div className={styles.container_error}>
                <img alt="Dont Find Image Rick & Morty" src="/rickmorty.png" />
                <h3>No results were found!</h3>
            </div>
        </div>
    )
}