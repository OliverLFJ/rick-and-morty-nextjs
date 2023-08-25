'use client'
import RecentCharacters from "@/components/layout/RecentCharacters"
import styles from "./Layout.module.css"
import { DataContextProvider } from "@/contexts/DataContext"
import RecentEpisodes from "@/components/layout/RecentEpisodes"
import { useState, useEffect } from 'react'
import Loader from "@/components/utils/Loader"
import { useMenuContext } from "@/contexts/MenuContext"

export default function Page() {

    const [showContent, setShowContent] = useState(false);
    const simulateDelay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setShowContent(true);
    };
    simulateDelay();

    const { setMenuState } = useMenuContext()

    useEffect(() => {
        const handleScroll = () => {
            setMenuState(false);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [setMenuState]);

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