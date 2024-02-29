
import './App.css';
import Header from './todo/header';
import AddTodo from './todo/add';
import { useState } from 'react';

function App() {
const[todos, setTodos] = useState([])
const[user, setUser] = useState(false)




  return (
    <main>
      <Header user={user} setUser={setUser}/>
      <AddTodo setTodos={setTodos}/>
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
