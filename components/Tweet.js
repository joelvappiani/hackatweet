import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Tweet = (props) => {
  let date = new Date(props.date);
  let hour = date.getHours();
  hour < 10 ? (hour = `0${hour}`) : hour;
  let min = date.getMinutes();
  min < 10 ? (min = `0${min}`) : min;

  let curDate = new Date();
  const msInHour = 1000 * 60 * 60;
  let delay;

  if (Math.floor(Math.abs(date - curDate) / msInHour) === 0) {
    delay = `${Math.floor((Math.abs(date - curDate) / msInHour) * 60)} min`;
  } else {
    delay = `${Math.floor(Math.abs(date - curDate) / msInHour)} hours`;
  }

  console.log(props);
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.user}>
        <p>FirstName</p>
        <p className={styles.userName}>userName</p>
        <p className={styles.date}>{delay}</p>
      </div>
      <p className={styles.content}>{props.message}</p>
      <div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default Tweet;
