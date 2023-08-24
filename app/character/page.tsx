'use client'
import styles from "./../Layout.module.css"
import CharactersComponent from "@/components/CharactersComponent"
import { DataCharacterContextProvider } from "@/contexts/DataCharacterContext"
export default function CharacterPage() {
    return (
        <div className={styles.content}>
            <div className={styles.general_content}>
                <h2 className={styles.title}>Characters</h2>
                <DataCharacterContextProvider>
                    <CharactersComponent />
                </DataCharacterContextProvider>
            </div>
        </div>
    )
}