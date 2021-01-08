import React from "react";

function ToDo({ text, todo, setToDos, toDos }) {
  const deleteHandle = () => {
    setToDos(toDos.filter((el) => el.id !== todo.id));
    console.log("delete");
  };

  const completeHandle = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
    console.log("completed");
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandle} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandle} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDo;
