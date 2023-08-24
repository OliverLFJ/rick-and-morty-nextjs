'use client'
import RecentCharacters from "@/components/layout/RecentCharacters"
import styles from "./Layout.module.css"
import { DataContextProvider } from "@/contexts/DataContext"
import RecentEpisodes from "@/components/layout/RecentEpisodes"
import { useState } from 'react'
import Loader from "@/components/utils/Loader"

export default function Page() {

    const [showContent, setShowContent] = useState(false);
    const simulateDelay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setShowContent(true);
    };
    simulateDelay();

    return (
        <div className={styles.content}>
            {showContent ? (
                <div className={styles.general_content}>
                    <h2 className={styles.title}>Recent Characters</h2>
                    <DataContextProvider>
                        <RecentCharacters />
                        <h2 className={styles.title}>Recent Episodes</h2>
                        <RecentEpisodes />
                    </DataContextProvider>
                </div>) :
                (
                    <Loader />
                )}

        </div>
    )
}