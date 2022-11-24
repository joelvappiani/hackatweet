import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "./Tweet";

import { useEffect, useState } from "react";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweets(data.tweets);
      });
  }, []);

  const tweetList = tweets.map((data, i) => {
    return <Tweet key={i} {...data} />;
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
        <div>{tweetList}</div>
      </div>
      <div className={styles.trends}>
        <h1>Trending posts</h1>
      </div>
    </div>
  );
};


export default Home