import styles from "../styles/Trends.module.css";
import Link from "next/link";

const Trends = (props) => {
  return (
    <Link href={`/post/${props.hashtagName.slice(1)}`}>
      <div className={styles.hashtag}>
        <div className={styles.trendTitle}>{props.hashtagName}</div>
        <div className={styles.trendCount}>
          {props.count} {props.count <= 1 ? "tweet" : "tweets"}
        </div>
      </div>
    </Link>
  );
};

export default Trends;
