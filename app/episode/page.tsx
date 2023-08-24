'use client'
import EpisodesComponent from "@/components/EpisodesComponent"
import styles from "./../Layout.module.css"
import { DataEpisodesContextProvider } from "@/contexts/DataEpisodesContext"
export default function EpisodePage() {
    return (
        <div className={styles.content}>
            <div className={styles.general_content}>
                <h2 className={styles.title}>Find By Episodes</h2>
                <DataEpisodesContextProvider>
                    <EpisodesComponent />
                </DataEpisodesContextProvider>
            </div>
        </div>
    )
}