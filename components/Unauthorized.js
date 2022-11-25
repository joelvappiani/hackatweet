import Link from 'next/link'
import styles from '../styles/Unauthorized.module.css'


const Unauthorized = () => {

    return (
        <div className={styles.main}>
            <h2>Sorry, you have to be connected to access content..</h2>
            <Link href="/" className={styles.link}>Go to login page</Link>
        </div>
    )
}


export default Unauthorized;