import React from "react";
import styles from "./banner.module.css";
import axios from "./Axios";
import requests from "./Request";
import { useState, useEffect } from "react";

export default function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const description = movie?.overview;
  const truncatedDescription = truncate(description, 150);

  return (
    <div>
      <header
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "relative",
          height: "110vh",
          objectFit: "contain",
        }}
        className={styles.bannerStyle}
      >
        <div className={styles.bannerContent}>
          <div className={styles.bannerTitle}>
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          </div>

          <div className={styles.movieButton}>
            <button className={styles.bannerButton}>Play</button>
            <button className={styles.bannerButton}>My List</button>
          </div>

          <div>
            <h1 className={styles.bannerDescription}>{truncatedDescription}</h1>
          </div>

          <div className={styles.bannerFadeBottom}></div>
        </div>
      </header>
    </div>
  );
}
