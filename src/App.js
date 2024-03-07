import { useSelector } from "react-redux";
import { useState } from "react";
import "./utils";

import Header from "./todo/header";
import AddTodo from "./todo/add";
import TodoList from "./todo/list";
import Modal from "./todo/modal";

function App() {
  const { open: isModalOpen } = useSelector((state) => state.modal);
  const state = useSelector((state) => state);
  console.log(state);
  const [language, setLanguage] = useState("tr"); //todo
  const [dark, setDark] = useState(true); //todo,

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
