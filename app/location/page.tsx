'use client'
import LocationsComponent from "@/components/layout/LocationsComponent"
import styles from "./../Layout.module.css"
import { DataLocationContextProvider } from "@/contexts/DataLocationContext"
import { useState } from "react"
import Loader from "@/components/utils/Loader"

export default function LocationPage() {

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
                    <h2 className={styles.title}>Find By Locations</h2>
                    <DataLocationContextProvider>
                        <LocationsComponent />
                    </DataLocationContextProvider>
                </div>
            ) : (
                <Loader />
            )}

        </div>
    )
}