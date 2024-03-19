import { useState, useEffect } from "react";
import styles from "./navigator.module.css";

export default function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`${styles.nav} ${show && styles.navBackground}`}>
      <div className={styles.navContents}>
        <img
          className={styles.navLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        ></img>
        <img
          className={styles.profilePic}
          src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"
        ></img>
      </div>
    </div>
  );
}
