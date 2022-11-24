import styles from "../styles/Login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.img}></div>
        <div className={styles.login}>
          <h1>See What's Happening</h1>
          <h3>Join Hackatweet today.</h3>
          <button
            className={styles.signupBtn}
            onClick={() => {
              openSignUpModal();
            }}
          >
            Sign up
          </button>
          <h4>Already have an account ?</h4>
          <button
            className={styles.signInBtn}
            onClick={() => {
              openSignIpModal();
            }}
          >
            Sign In
          </button>
          <Link href="/home" className={styles.link}>
            Link to Home page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
