import React from "react";
import { useState, useEffect } from "react";
import styles from "./row.module.css";
import axios from "./Axios";

export default function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.allRowPosters}>
        {movies.map((movie) => (
          <img
            className={`${styles.rowPoster} ${
              isLargeRow && styles.PosterLarge
            }`}
            key={movie.id} // Remember to add a unique key when using map
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
