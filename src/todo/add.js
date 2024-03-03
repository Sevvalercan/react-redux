import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addTodoHandle } from "../utils";

export default function AddTodo() {
  const { user } = useSelector((state) => state.auth);

  const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    addTodoHandle({
      title: todo,
      done: false,
      id: nanoid(),
      user: user.id,
    });
    setTodo("");
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button disabled={!todo || !user} type="submit">
        {" "}
        Ekle
      </button>
    </form>
  );
}
