import styles from "../styles/Trends.module.css";
import { useState } from "react";

const Trends = (props) => {
    return (
  <div className={styles.hashtag}>
    <div className={styles.trendTitle}>#salut</div>
    <div className={styles.trendCount}>0 tweets</div>
  </div>)
};

export default Trends;
