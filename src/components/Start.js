import React from "react";
import styles from "../styles/Start.module.css";
function Start() {
  return (
    <div className={styles.start_container}>
      <img
        src={require("../assets/logo.png")}
        className={styles.logo_img}
      ></img>

      <img
        src={require("../assets/quiz.png")}
        className={styles.quiz_img}
      ></img>
      <button className={styles.btn}>Start</button>
    </div>
  );
}

export default Start;
