import React, { useState } from "react";

const ToDo = (items) => {
  const [todos, setTodos] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const clickOnComponent = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };


    return (
      <div>
        {todos.map((item, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "200px",
              margin: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => clickOnComponent(index)}
          >
            <div
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.name}
            </div>
            {item.completed ? "\u2718" : "\u2714"}
          </div>
        ))}
      </div>
    );
};

export default ToDo;
