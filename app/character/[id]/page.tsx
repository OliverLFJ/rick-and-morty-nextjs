import styles from "./../../Layout.module.css"
const fetchInvidualCharacter = async (id: number) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    const dataCharacter = await data
    return dataCharacter
}

export default async function IndividualCharacter({ params }: { params: any }) {

    const { id } = params;
    const data = await fetchInvidualCharacter(id)

    return (
        <div className={styles.content}>
            <div className={styles.general_content}>
                <div className={styles.card_character}>
                    <header className={styles.header_card}>
                        <h2 className={styles.name_character}>{data.name}</h2>
                        <h2 className={styles.id_character}>{data.id}</h2>
                    </header>
                    <div className={styles.image_character}>
                        <img src={data.image} />
                    </div>
                    <div className={styles.info_character}>
                        <section>
                            <div>
                                <label>Specie</label>
                                <p>{data.species}</p>
                            </div>
                            <div>
                                <label>Status</label>
                                <p style={{ color: data.status === "Alive" ? "#97ce4c" : data.status === "Dead" ? "#980707" : data.status === "unknown" ? "black" : "" }}>{data.status}</p>
                            </div>
                            <div>
                                <label>Gender</label>
                                <p>{data.gender}</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <label>Origin</label>
                                <p>{data.origin.name}</p>
                            </div>
                            <div>
                                <label>Location</label>
                                <p>{data.location.name}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
