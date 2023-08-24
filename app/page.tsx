'use client'
import RecentCharacters from "@/components/RecentCharacters"
import styles from "./Layout.module.css"
import { DataContextProvider } from "@/contexts/DataContext"
import RecentEpisodes from "@/components/RecentEpisodes"

export default function Page() {
    return (
        <div className={styles.content}>
            <div className={styles.general_content}>
                <h2 className={styles.title}>Recent Characters</h2>
                <DataContextProvider>
                    <RecentCharacters />
                    <h2 className={styles.title}>Recent Episodes</h2>
                    <RecentEpisodes />
                </DataContextProvider>
            </div>
        </div>
    )
}