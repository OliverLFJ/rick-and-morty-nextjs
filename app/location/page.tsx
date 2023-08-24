'use client'
import LocationsComponent from "@/components/LocationsComponent"
import styles from "./../Layout.module.css"
import { DataLocationContextProvider } from "@/contexts/DataLocationContext"
export default function LocationPage() {
    return (
        <div className={styles.content}>
            <div className={styles.general_content}>
                <h2 className={styles.title}>Find By Locations</h2>
                <DataLocationContextProvider>
                    <LocationsComponent />
                </DataLocationContextProvider>
            </div>
        </div>
    )
}