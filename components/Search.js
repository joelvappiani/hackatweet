import styles from "../styles/Hashtag.module.css";
import { useState } from "react";
import Link from "next/link";


const Search = (props) => {
    const [search, setSearch] = useState()
    console.log(search)
    const handleClick = () => {

    }
    return (
        <div className={styles.search}>
            <input className={styles.inputField} placeholder={`#${props.hashtag}`} onChange={(e)=> setSearch(e.target.value)}value={search}/>
            <Link href={`/post/${search}`}><button className={styles.searchBtn}>Search</button></Link>
        </div>
    )
}

export default Search