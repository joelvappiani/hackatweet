import styles from "../styles/Input.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "../reducers/tweets";

const Input = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const added = useSelector((state) => state.tweets.value);
  const token = useSelector((state) => state.users.value.token);

  const handleAdd = () => {
    
    let hashtag = message.match(/#[a-z]+/gi);

    fetch("http://localhost:3000/api/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, message, nbLikes: 0 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("");
        dispatch(addTweet());
        console.log(added);
      });
  };
  return (
    <>
      <div className={styles.main}>
        <input
          className={styles.input}
          type="text"
          maxLength={280}
          placeholder="What's up?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className={styles.btnSection}>
          <div className={styles.counter}>{message.length}/280</div>
          <button className={styles.btnTweet} onClick={handleAdd}>
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
