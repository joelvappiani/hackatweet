import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Tweet = (props) => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.user}>
        <p>First Name</p>
        <p>userName</p>
        <p>time</p>
      </div>
      <p className={styles.content}>Tweet Content</p>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default Tweet;
