import styles from '../styles/Input.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Input = () => {
    const [message, setMessage] = useState("")
    

    const token = useSelector((state)=> state.users.value)

    const handleAdd = () => {
        fetch('http://localhost:3000/api/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, message, nbLikes: 0 }),
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            setMessage("")
        })
    }
    return (
        <>
            <div className={styles.main}>
                <input className={styles.input} type="text" maxLength={280} placeholder="What's up?"onChange={(e)=> setMessage(e.target.value)} value={message}/>
                <div className={styles.btnSection}>
                    <div className={styles.counter} >{message.length}/280</div>
                    <button className={styles.btnTweet} onClick={handleAdd}>Tweet</button>
                </div>
            </div>
        </>
    )
}

export default Input