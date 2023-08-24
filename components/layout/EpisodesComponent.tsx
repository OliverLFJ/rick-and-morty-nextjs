'use client'

import { useDataEpisodesContext } from "@/contexts/DataEpisodesContext"
import styles from "./../Component.module.css"

export default function EpisodesComponent() {

    const { dataEpisodes, charactersFromChapters, setEpisodeSelected } = useDataEpisodesContext()
    return (
        <div className={styles.container_component}>
            <select onChange={(e) => setEpisodeSelected(e.target.value)}>
                {dataEpisodes.map((item: any, index: number) => (
                    <option key={index} value={index + 1}>{item}</option>
                ))}
            </select>
            <div className={styles.grid_container_recentchar}>
                {
                    charactersFromChapters.map((item: any) => (
                        <div className={styles.card} key={item.id}>
                            <div className={styles.number_card}>
                                <h4>{item.id}</h4>
                            </div>
                            <img alt={item.name} src={item.image} />
                            <div className={styles.character_info}>
                                <section>
                                    <h3 className={styles.character_name}>{item.name}</h3>
                                </section>
                                <section>
                                    <h4 className={styles.character_status} style={{ color: item.status === "Alive" ? "#07984F" : item.status === "Dead" ? "#980707" : item.status === "unknown" ? "#A97307" : "" }}>{item.status}</h4>
                                    <h4 className={styles.character_gender}>{item.gender}</h4>
                                    <h4 className={styles.character_species}>{item.species}</h4>
                                </section>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
