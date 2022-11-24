import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "./Tweet";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [tweetsList, setTweetsList] = useState([]);

  const tweets = useSelector((state) => state.tweets.value);

  const hashtag = useSelector((state) => state.hashtag.value);

  console.log(hashtag)

  useEffect(() => {
    fetch("http://localhost:3000/api/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetsList(data.tweets);
      });
  }, [tweets]);

  const tweetLists = tweetsList.map((data, i) => {
    const user = data.user;
    return <Tweet key={i} {...data} {...user} />;
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
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
          </div>

          <div>
            <p className={styles.firstName}>FirstName</p>
            <p className={styles.userName}>@username</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <Input />
          <div className={styles.tweetContainer}>
            <div>{tweetLists}</div>
          </div>
        </div>
      </div>

      <div className={styles.trends}>
        <h1>Trending posts</h1>
      </div>
    </div>
  );
};

export default Home;
