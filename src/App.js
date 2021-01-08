import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [toDos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(toDos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(toDos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredToDos(toDos);
        break;
    }
  };
  return (
    <div className="App">
      <header>Rahul To Do List </header>
      <Form
        inputText={inputText}
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredToDos={filteredToDos}
        setToDos={setToDos}
        toDos={toDos}
      />
      <footer> Contact If any query @bhojakrahul1996@gmail.com </footer>
    </div>
  );
};

export default App;
