import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "./Tweet";
import Input from "./Input";
import Trends from "./Trends";
import Unauthorized from "./Unauthorized";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { logout } from "../reducers/users";

const Home = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const [tweetsList, setTweetsList] = useState([]);

  const tweets = useSelector((state) => state.tweets.value);

  const users = useSelector((state) => state.users.value);

  let username = useSelector((state) => state.users.value.username);

  let firstName = useSelector((state) => state.users.value.firstName);

  useEffect(() => {
    fetch("http://localhost:3000/api/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetsList(
          data.tweets.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          })
        );
      });
  }, [tweets]);

  const tweetLists = tweetsList.map((data, i) => {
    const userId = data.user._id;

    const user = data.user;
    const tweetId = data._id;
    const myId = users._id

    console.log(data);

    return (
      <Tweet
        key={i}
        {...data}
        {...user}
        tweetId={tweetId}
        isUserTweet={user.token === users.token}
        userId={userId}
        isLiked={data.userLikes.find((e) => e === users._id)}
      />
    );
  });

  const handleLogout = () => {
    router.push("/");
    setTimeout(() => {
      dispatch(logout());
    }, 500);
  };

  if (users) {
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
          <div className={styles.trendsList}>
            <Trends />
          </div>
        </div>
      </div>
    );
  } else {
    return <Unauthorized />;
  }
};

export default Home;
