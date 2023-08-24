import styles from "./../Component.module.css"
import { speciesData, genderData, statusData } from '../../utils/speciedata'
import { useDataCharacterContext } from "@/contexts/DataCharacterContext"
import { SET_NAME, SET_STATUS, SET_SPECIE, SET_GENDER } from '../../reducers/ActionType';

export default function FiltersCharacter() {


    const {
        setPageSelected,
        dispatch,
        state
    } = useDataCharacterContext()


    const putName = (event: any) => {
        setPageSelected(1);
        dispatch({ type: SET_NAME, payload: event.target.value });
    };

    const putSpecie = (event: any) => {
        setPageSelected(1);
        dispatch({ type: SET_SPECIE, payload: event.target.value });
    };

    const putStatus = (event: any) => {
        setPageSelected(1);
        dispatch({ type: SET_STATUS, payload: event.target.value });
    };

    const putGender = (event: any) => {
        setPageSelected(1);
        dispatch({ type: SET_GENDER, payload: event.target.value });
    };

    const cleanAllFilter = () => {
        dispatch({ type: SET_NAME, payload: '' });
        dispatch({ type: SET_STATUS, payload: '' });
        dispatch({ type: SET_SPECIE, payload: '' });
        dispatch({ type: SET_GENDER, payload: '' });
    }

    return (
        <div className={styles.filters_container}>
            <div className={styles.form_container}>
                <div className={styles.form_group}>
                    <label>Name</label>
                    <input value={state && state.name} onChange={(e) => putName(e)} placeholder="Find By Name" />
                </div>
                <div className={styles.form_group}>
                    <button onClick={cleanAllFilter}>Clean Filters</button>
                </div>
            </div>
            <div className={styles.form_container}>
                <div className={styles.form_group}>
                    <label>Status</label>
                    <select value={state && state.status} onChange={(e) => putStatus(e)}>
                        {statusData.map((item) => (
                            <option value={item.value} key={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label>Specie</label>
                    <select value={state && state.specie} onChange={(e) => putSpecie(e)}>
                        {speciesData.map((item) => (
                            <option value={item.value} key={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label>Gender</label>
                    <select value={state && state.gender} onChange={(e) => putGender(e)}>
                        {genderData.map((item) => (
                            <option value={item.value} key={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}