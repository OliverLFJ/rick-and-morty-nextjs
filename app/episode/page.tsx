'use client'
import EpisodesComponent from "@/components/layout/EpisodesComponent"
import styles from "./../Layout.module.css"
import { DataEpisodesContextProvider } from "@/contexts/DataEpisodesContext"
import { useState } from 'react'
import Loader from "@/components/utils/Loader"

export default function EpisodePage() {

    const [showContent, setShowContent] = useState(false);
    const simulateDelay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 700));
        setShowContent(true);
    };
    simulateDelay();

    return (
        <div className={styles.content}>
            {showContent ? (
                <div className={styles.general_content}>
                    <h2 className={styles.title}>Find By Episodes</h2>
                    <DataEpisodesContextProvider>
                        <EpisodesComponent />
                    </DataEpisodesContextProvider>
                </div>
            ) : (
                <Loader />
            )}

        </div>
    )
}