'use client'
import styles from "./../Layout.module.css"
import { DataEpisodesContextProvider } from "@/contexts/DataEpisodesContext"
import { useState, Suspense, lazy } from 'react'
import Loader from "@/components/utils/Loader"

const CharactersComponentLazy = lazy(() => import('@/components/layout/EpisodesComponent'));


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
                        <Suspense fallback={null}>
                            <CharactersComponentLazy />
                        </Suspense>
                    </DataEpisodesContextProvider>
                </div>
            ) : (
                <Loader />
            )}

        </div>
    )
}