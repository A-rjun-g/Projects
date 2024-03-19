import Todo from "./Components/Todo";
import Header from "./Components/Header";
import styles from "./App.css";
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
