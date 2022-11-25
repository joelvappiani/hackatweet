import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Cursor } from "mongoose";

import { useDispatch } from "react-redux";
import { deleteTweet } from "../reducers/tweets";

const Tweet = (props) => {
  const dispatch = useDispatch();

  let tweetDate = new Date(props.date);
  let hour = tweetDate.getHours();
  hour < 10 ? (hour = `0${hour}`) : hour;
  let min = tweetDate.getMinutes();
  min < 10 ? (min = `0${min}`) : min;

  let curDate = new Date();
  const msInHour = 1000 * 60 * 60;
  let delay;

  if (Math.floor(Math.abs(tweetDate - curDate) / msInHour) === 0) {
    delay = `${Math.floor(
      (Math.abs(tweetDate - curDate) / msInHour) * 60
    )} min`;
  } else if (Math.floor(Math.abs(tweetDate - curDate) / msInHour) === 1) {
    delay = `${Math.floor(Math.abs(tweetDate - curDate) / msInHour)} hour`;
  } else {
    delay = `${Math.floor(Math.abs(tweetDate - curDate) / msInHour)} hours`;
  }

  const handleDelete = () => {
    const id = props.tweetId;
    fetch("http://localhost:3000/api/tweets", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteTweet());
      });
  };

  const handleLike = () => {
    const id = props.tweetId;
    const counter = props.isLiked ? "decrement" : "increment";
    const userId = props.userId;

    fetch("http://localhost:3000/api/tweets", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, counter, userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteTweet());
      });
  };

  let displayStyle;

  if (!props.isUserTweet) {
    displayStyle = { display: "none" };
  }

  let likeStyle;

  if (props.isLiked) {
    likeStyle = { color: "red" };
  }

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.user}>
        <div className={styles.profileImage}>
          <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
        </div>
        <p >{props.firstName}</p>
        <p className={styles.userName}>@{props.username}</p>
        <p className={styles.date}>{delay}</p>
      </div>
      <p className={styles.content}>{props.message}</p>
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ ...likeStyle, marginRight: "5px", cursor: "pointer" }}
          onClick={() => {
            handleLike();
          }}
        />
        <span style={{ marginRight: "10px" }}>({props.nbLikes})</span>
        <FontAwesomeIcon
          icon={faTrash}
          style={displayStyle}
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default Tweet;
