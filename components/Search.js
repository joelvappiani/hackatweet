import styles from "../styles/Hashtag.module.css";
import { useState } from "react";
import { useRouter } from 'next/router'


const Search = (props) => {
    const router = useRouter()
    const [search, setSearch] = useState()
    console.log(search)
    const handleClick = () => {
        router.push(`/post/${search}`)
    }
    return (
        <div className={styles.search}>
            <input className={styles.inputField} placeholder={`#${props.hashtag}`} onChange={(e)=> setSearch(e.target.value)} value={search}/>
            <button className={styles.searchBtn} onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search