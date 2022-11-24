import styles from '../styles/Login.module.css';
import Link from 'next/link'

const Login = () => {
    return(
        <>
        <div className={styles.main}>
        <h1>Login Page</h1>
        <Link href="/home" className={styles.link}>Link to Home page</Link>
        </div>
        </>
    )
}
{/* <Link href="/test" className={styles.link}>Link to Test page</Link> */}

export default Login