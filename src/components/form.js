import React from "react";

const form = ({ setInputText, inputText, setToDos, toDos, setStatus }) => {
  //Js code Here!!!
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText(" ");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={inputText}
          className="todo-input"
          onChange={inputTextHandler}
        />
        <button
          onClick={submitToDoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default form;
