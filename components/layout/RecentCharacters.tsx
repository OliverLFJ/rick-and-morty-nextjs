import Link from "next/link"
import { useDataContext } from "../../contexts/DataContext"
import styles from "./../Component.module.css"

export default function RecentCharacters() {

    const { characters } = useDataContext()

    return (
        <div className={styles.grid_container_recentchar}>
            {
                characters.map((item: any) => (
                    <Link key={item.id} href={`/character/${item.id}`} passHref>
                        <div className={styles.card}>
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
                    </Link>
                ))
            }
        </div >
    )
}