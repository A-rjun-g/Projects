import PrintTask from "./PrintTask";
import styles from "./todoList.module.css";

export default function TodoList({ tasks, setTodos }) {
  return (
    <div className={styles.list}>
      {tasks.map((task, index) => (
        <PrintTask
          key={task.name}
          task={task}
          tasks={tasks}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
