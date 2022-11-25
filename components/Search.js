import styles from "../styles/Hashtag.module.css";
import { useState } from "react";


const Search = (props) => {
    const [search, setSearch] = useState()
    console.log(search)
    return (
        <div className={styles.search}>
            <input className={styles.inputField} placeholder={`#${props.hashtag}`} onChange={(e)=> setSearch(e.target.value)}value={search}/>
            <button className={styles.searchBtn} >Search</button>
        </div>
    )
}

export default Search