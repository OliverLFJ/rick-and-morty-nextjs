'use client'
import styles from "./../Layout.module.css"
import CharactersComponent from "@/components/layout/CharactersComponent"
import Loader from "@/components/utils/Loader"
import { DataCharacterContextProvider } from "@/contexts/DataCharacterContext"
import { useState } from "react"

export default function CharacterPage() {

    const [showContent, setShowContent] = useState(false);
    const simulateDelay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setShowContent(true);
    };
    simulateDelay();

    return (
        <div className={styles.content}>
            {showContent ? (
                <div className={styles.general_content}>
                    <h2 className={styles.title}>Characters</h2>
                    <DataCharacterContextProvider>
                        <CharactersComponent />
                    </DataCharacterContextProvider>
                </div>
            ) : (
                <Loader />
            )}

        </div>
    )
}