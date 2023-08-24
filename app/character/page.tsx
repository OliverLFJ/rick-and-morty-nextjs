'use client'
import styles from "./../Layout.module.css"
import Loader from "@/components/utils/Loader"
import { DataCharacterContextProvider } from "@/contexts/DataCharacterContext"
import { lazy, useState, Suspense } from "react"

const CharactersComponentLazy = lazy(() => import('@/components/layout/CharactersComponent'));

export default function CharacterPage() {

    const [showContent, setShowContent] = useState(false);
    const simulateDelay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setShowContent(true);
    };
    simulateDelay();

    return (
        <Suspense fallback={<Loader />}>
            <div className={styles.content}>
                {showContent ? (
                    <div className={styles.general_content}>
                        <h2 className={styles.title}>Characters</h2>
                        <DataCharacterContextProvider>
                            <Suspense fallback={null}>
                                <CharactersComponentLazy />
                            </Suspense>
                        </DataCharacterContextProvider>
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        </Suspense >
    )
}