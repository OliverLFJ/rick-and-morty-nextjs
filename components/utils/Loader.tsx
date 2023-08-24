import styles from './../Component.module.css'

export default function Loader() {
    return (
        <div className={styles.loader_container}>
            <div className={styles.custom_loader}></div>
        </div>
    )
}