/*Todo is the parent for TodoList and Forms */
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTodos] = useState([]);
  return (
    <div>
      <Form tasks={tasks} setTodos={setTodos} />
      <TodoList tasks={tasks} setTodos={setTodos}/>
    </div>
  );
}
