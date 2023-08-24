import { useDataContext } from "../../contexts/DataContext"
import styles from "./../Component.module.css"

export default function RecentEpisodes() {

    const { episodes } = useDataContext()

    return (
        <div className={styles.grid_container_recentchar}>
            {
                episodes.map((item: any) => (
                    <div className={styles.card_episodes} key={item.id}>
                        <section>
                            <h3>{item.name}</h3>
                        </section>
                        <div className={styles.card_episode_info}>
                            <h3>{item.episode}</h3>
                            <h3>{item.air_date}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}