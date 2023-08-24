import { useDataCharacterContext } from "@/contexts/DataCharacterContext";

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
        <div className="button-container">
            <button className="button-paginate" disabled={pageSelected === 1} onClick={prevPage}>{'<'}</button>
            <button className="button-paginate" style={{ display: pageSelected > 4 ? 'inline' : 'none' }} onClick={reset}>{'1'}</button>
            {totalButtons.map((item: any, index: number) => {
                return (
                    <button
                        key={index}
                        onClick={() => selectPage(item)}
                        className={item === pageSelected ? 'button-paginate active-button' : 'button-paginate'}
                    >
                        {item}
                    </button>
                );
            })}
            <button className="button-paginate" disabled={totalButtons.length === 1} onClick={nextPage}>{'>'}</button>
        </div>
    )
}