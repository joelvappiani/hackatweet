import styles from "../styles/Trends.module.css";
import Link from "next/link";

const Trends = (props) => {
  const name = props.hashtagName;
  return (
    <Link href={`/post/${name}`}>
      <div className={styles.hashtag}>
        <div className={styles.trendTitle}>#{props.hashtagName}</div>
        <div className={styles.trendCount}>
          {props.count} {props.count <= 1 ? "tweet" : "tweets"}
        </div>
      </div>
    </Link>
  );
};

export default Trends;
