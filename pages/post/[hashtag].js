import { useRouter } from 'next/router'
import styles from '../../styles/Hashtag.module.css'
import Image from "next/image";
import Tweet from "../../components/Tweet";
// import Input from "../../components/Input";
import Trends from "../../components/Trends";
import Search from '../../components/Search'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../reducers/users";
const Post = () => {
  const router = useRouter()
  const { hashtag } = router.query
  const [tweetsList, setTweetsList] = useState([])
  const tweets = useSelector((state) => state.tweets.value);

  const users = useSelector((state) => state.users.value);
  
  let username = useSelector((state)=> state.users.value.username)
  
  let firstName = useSelector((state)=> state.users.value.firstName)

  const handleLogout = () => {
    router.push("/");
    setTimeout(()=> {
      dispatch(logout());
    }, 500)
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/tweets")
      .then((response) => response.json())
      .then(data => {
        const dataArr = data.tweets.filter((e)=> {
           return e.hashtag.find(f => f === `#${hashtag}`)
        })
        console.log(dataArr)
        setTweetsList(dataArr)
      })
     
  }, []);
  const tweetLists = tweetsList.map((data, i) => {
    const userId = data.user._id;
    const user = data.user;
    const tweetId = data._id;
    const myId = users._id

   console.log(data.userLikes.some((e) => e === users._id))
    return (
      <Tweet
        key={i}
        {...data}
        {...user}
        tweetId={tweetId}
        isUserTweet={user.token === users.token}
        userId={userId}
        isLiked={data.userLikes.some((e) => e === userId)}
        
      />
    );
  });
  return (

    <div className={styles.homeContainer}>
      
        <div className={styles.leftMenu}>
          <Image
            className={styles.logo}
            src="/images/logo-white.png"
            alt="logo"
            width={50}
            height={50}
          />
          <div className={styles.leftMenuFooter}>
            <div className={styles.profile}>
              <div className={styles.profileImage}>
                <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
              </div>

              <div>
                <p className={styles.firstName}>{firstName}</p>
                <p className={styles.userName}>@{username}</p>
              </div>
            </div>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className={styles.middleSection}>
          
            <h1>Hashtag</h1>
            <Search hashtag={hashtag}/>
            <div className={styles.tweetsContainer}>
              <div>
                {tweetLists}
              </div>
            </div>
          
        </div>

        <div className={styles.trends}>
          <h1>Trending posts</h1>
          <div className={styles.trendsList}>
            <Trends />
          </div>
        </div>
      </div>
  )
}

export default Post