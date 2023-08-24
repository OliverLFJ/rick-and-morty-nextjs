import { useDataCharacterContext } from "@/contexts/DataCharacterContext";
import styles from "./../Component.module.css"

export default function ButtonsComponent() {

    const {
        totalButtons,
        pageSelected,
        setPageSelected,
        setPrevStatus,
        setNextStatus,
        nextStatus,
        prevStatus,
        buttonFind,
        setButtonFind } = useDataCharacterContext();

    const nextPage = () => {
        setNextStatus(!nextStatus)
        setPageSelected(pageSelected + 1)
    }

    const prevPage = () => {
        setPrevStatus(!prevStatus)
        setPageSelected(pageSelected - 1)
    }

    const selectPage = (page: number) => {
        setButtonFind(!buttonFind)
        setPageSelected(page)
    }

    const reset = () => {
        setPageSelected(1)
    }

    return (
        <div className={styles.button_container}>
            <button className={styles.button_paginate} disabled={pageSelected === 1} onClick={prevPage}>{'<'}</button>
            <button className={styles.button_paginate} style={{ display: pageSelected > 4 ? 'inline' : 'none' }} onClick={reset}>{'1'}</button>
            {totalButtons.map((item: any, index: number) => {
                return (
                    <button
                        key={index}
                        onClick={() => selectPage(item)}
                        className={`${styles.button_paginate} ${item === pageSelected ? styles.active_button : ''}`}
                    >
                        {item}
                    </button>
                );
            })}
            <button className={styles.button_paginate} disabled={totalButtons.length === 1} onClick={nextPage}>{'>'}</button>
        </div>
    )
}