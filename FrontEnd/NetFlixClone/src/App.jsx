import Nav from "./Components/Navigator";
import styles from "./app.module.css";
import Banner from "./Components/Banner";
import requests from "./Components/Request";
import Row from "./Components/Row";
function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow={true}
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="BEST IN ROMANCE" fetchURL={requests.fetchRomanceMovies} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTRIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
