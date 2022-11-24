import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "./Tweet";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [tweetsList, setTweetsList] = useState([]);

  const tweets = useSelector((state) => state.tweets.value);

  useEffect(() => {
    fetch("http://localhost:3000/api/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetsList(data.tweets);
      });
  }, [tweets]);

  const tweetLists = tweetsList.map((data, i) => {
    console.log(data.user)
    const user=data.user
    return <Tweet key={i} {...data} {...user} />;
    
  });

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftMenu}>
        <Image src="/images/logo-white.png" alt="logo" width={50} height={50} />
        <div className={styles.profile}>
          <p>FirstName</p>
          <p>username</p>
        </div>
      </div>
      <div className={styles.tweetContainer}>
        <div>{tweetLists}</div>
      </div>
      <div className={styles.trends}>
        <h1>Trending posts</h1>
      </div>
    </div>
  );
};

export default Home;
