import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faTrash,faUser } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react"

const Tweet = (props) => {




  let tweetDate = new Date(props.date);
  let hour = tweetDate.getHours();
  hour < 10 ? (hour = `0${hour}`) : hour;
  let min = tweetDate.getMinutes();
  min < 10 ? (min = `0${min}`) : min;

  let curDate = new Date();
  const msInHour = 1000 * 60 * 60;
  let delay;

  if (Math.floor(Math.abs(tweetDate - curDate) / msInHour) === 0) {
    delay = `${Math.floor((Math.abs(tweetDate - curDate) / msInHour) * 60)} min`;
  } else {
    delay = `${Math.floor(Math.abs(tweetDate - curDate) / msInHour)} hours`;
  }


  return (
    <div className={styles.tweetContainer}>
      <div className={styles.user}>
        <div className={styles.profileImage}>
          <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
        </div>
        <p>{props.username}</p>
        <p className={styles.userName}>userName</p>
        <p className={styles.date}>{delay}</p>
      </div>
      <p className={styles.content}>{props.message}</p>
      <div>
        <FontAwesomeIcon icon={faHeart} style={{ marginRight: "10px" }} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Tweet;
