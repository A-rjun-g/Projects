import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ tasks, setTodos }) {
  const [task, setTodo] = useState({
    name: "",
    completed: false,
  }); /*Holds Individual task by using setTodo function */
  /*Assign the value of the task*/
  function handleChange(e) {
    setTodo({ name: e.target.value, completed: false });
  }
  /*Assign the task to the list of tasks */
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...tasks, task.name]);
    setTodo({
      name: "",
      completed: false,
    });
  }
  return (
    <form className={styles.formstyle} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => handleChange(e)}
          value={task.name}
          placeholder="Enter your Tasks"
          type="text"
        ></input>
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
