import React, { useEffect, useState } from "react";
import "./dragAndDrop.css";

export default function DragandDrop() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/todos?limit=5&skip=10`);
      const result = await response.json();

      //    console.log(result.todos);

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip", //work in progress
        }));
        setTodos(updatedTodos);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(todos);

  function onDragStart(e, id) {
    e.dataTransfer.setData("id", id);
  }

  function onDrop(e, status) {
    const id = e.dataTransfer.getData("id");
    let updatedTodos = todos.filter((todoItem) => {
      if (todoItem.id.toString() === id) {
        todoItem.status = status;
      }
      return todoItem;
    });
    setTodos(updatedTodos);
  }

  function renderTodos() {
    const todoListToRender = {
      wip: [],
      completed: [],
    };

    todos.forEach((todoItem) => {
      todoListToRender[todoItem.status].push(
        <div
          draggable
          key={todoItem.id}
          className="todo-card"
          onDragStart={(e) => onDragStart(e, todoItem.id)}
        >
          {todoItem.todo}
        </div>
      );
    });

    return todoListToRender;
  }

  if (loading) {
    return <h3>loading.........!</h3>;
  }

  return (
    <div className="drag-and-drop-con">
      <h2>Drag And Drop</h2>
      {todos && todos.length ? (
        <div className="drag-and-drop-board">
          <div
            className="work-in-progress-todo"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, "wip")}
          >
            <h3>Incomplete</h3>
            {renderTodos().wip}
          </div>
          <div
            className="completed-todo"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, "completed")}
          >
            <h3>Completed</h3>
            {renderTodos().completed}
          </div>
        </div>
      ) : null}
    </div>
  );
}
