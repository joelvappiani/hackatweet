import styles from "../styles/Login.module.css";
import Link from "next/link";
import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/users';
import { useRouter } from 'next/router'
import Image from 'next/image'


const Login = () => {

    const router = useRouter()

    const dispatch = useDispatch()

    const [wrong, setWrong] = useState("")

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  
    const [signUpFirstName, setSignUpFirstName] = useState("")
    const [signUpUserName, setSignUpUserName] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")

    const [signInUserName, setSignInUserName] = useState("")
    const [signInPassword, setSignInPassword] = useState("")

    const showSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const showSignInModal = () => {
      setIsSignInModalOpen(true);
    };

    const handleSignUpCancel = () => {
      setIsSignUpModalOpen(false);
      setSignUpFirstName("")
      setSignUpUserName("")
      setSignUpPassword("")
      setWrong("")
    };
    const handleSignInCancel = () => {
      setIsSignInModalOpen(false);
      setSignInUserName("")
      setSignInPassword("")
      setWrong("")
    };
    
    const handleSignUp = () => {
      fetch('http://localhost:3000/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: signUpUserName, 
          firstName: signUpFirstName,
          password: signUpPassword 
        }),
      }).then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.result) {
          dispatch(login(data.token))
          setWrong("")
          router.push('/home')
        } else 
        setWrong(data.error)
      })
    }

    const handleSignIn = () => {
      fetch('http://localhost:3000/api/signin', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: signInUserName, password: signInPassword }),
      }).then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.result) {
          dispatch(login(data.token))
          setWrong("")
          router.push('/home')
        } else 
        setWrong("Wrong username or password")
      })
    }
    
    

    const signUpForm = (
      <div>
        <div className={styles.form}>
          <input type="text" placeholder="FirstName" className={styles.formInput} onChange={(e)=> setSignUpFirstName(e.target.value)} value={signUpFirstName}/>
          <input type="text" placeholder="Username" className={styles.formInput} onChange={(e)=> setSignUpUserName(e.target.value)} value={signUpUserName}/>
          <input type="password" placeholder="Password" className={styles.formInput} onChange={(e)=> setSignUpPassword(e.target.value)} value={signUpPassword}/>
          <button className={styles.loginBtn} onClick={handleSignUp}>Sign Up</button>
          {wrong}
        </div>
        
      </div>
    )


    const signInForm = (
      <div className={styles.form}>
          <input type="text" placeholder="Username" className={styles.formInput} onChange={(e)=> setSignInUserName(e.target.value)} value={signInUserName}/>
          <input type="password" placeholder="Password" className={styles.formInput} onChange={(e)=> setSignInPassword(e.target.value)} value={signInPassword}/>
          <button className={styles.loginBtn} onClick={handleSignIn}>Sign In</button>
          {wrong}
      </div>
    )

  return (
    <>
      <div className={styles.main}>
        <div className={styles.leftBanner}>
        <Image
          className={styles.bannerImg}
          src="/images/logo-white.png"
          alt="logo"
          width={100}
          height={200}
          />
        </div>
          <div className={styles.rightForm}>
            <div className={styles.form}>
              <div className={styles.img}></div>
              <div className={styles.login}>
                <h1>See What's Happening</h1>
                <h3>Join Hackatweet today.</h3>
                <button
                  className={styles.signupBtn}
                  onClick={showSignUpModal}
                  >
                  Sign up
                </button>
                {isSignUpModalOpen &&  <Modal  
                  className={styles.modal}
                  open={isSignUpModalOpen} 
                  onCancel={handleSignUpCancel}
                  footer={null}
                  >
                {signUpForm}
                </Modal>}
                <h4>Already have an account ?</h4>
                <button
                  className={styles.signInBtn}
                  onClick={showSignInModal}
                  >
                  Sign In
                </button>
                {isSignInModalOpen &&  <Modal  
                  className={styles.modal}
                  open={isSignInModalOpen} 
                  onCancel={handleSignInCancel}
                  footer={null}
                  >
                {signInForm}
                </Modal>}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
