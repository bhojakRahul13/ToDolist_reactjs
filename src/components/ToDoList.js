import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredToDos.map((todo, index) => (
            <ToDo
              setToDos={setToDos}
              toDos={toDos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
