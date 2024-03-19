import styles from "./printTask.module.css";
export default function PrintTask({ task, tasks, setTodos }) {
  function handleDelete(task) {
    /*Traversing through the elements of the ToDos and  Returning the elements
    Not equal to the task*/
    setTodos(tasks.filter((temp) => temp !== task));
  }

  function handleClick() {
    console.log("Arjun");
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick="handleClick">{task}</span>

        <span>
          <button
            onClick={() => handleDelete(task)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
