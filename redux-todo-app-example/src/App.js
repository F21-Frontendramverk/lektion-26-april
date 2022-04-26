import './App.css';
import { useState, useEffect } from 'react';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import TodosCounter from './components/TodosCounter';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: 'Köp kaffe' },
    { id: 1, task: 'Köp kaka' },
    { id: 2, task: 'Brygg kaffe' },
    { id: 3, task: 'Drick kaffe' }
  ]);
  const [info, setInfo] = useState(true);

  useEffect(() => {
    console.log('State har uppdateras');
  }); // Denna useEffect körs varje gång något state uppdateras i denna komponent

  useEffect(() => {
    console.log('Körs enbart vid sidladdning');
    async function getTodos() {
      const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks');
      const data = await response.json();

      console.log(data);
      setTodos(data.todos);
    }

    getTodos();
  }, []); // Denna useEffect körs enbart en gång när sidan laddas och aldrig mer

  useEffect(() => {
    console.log('Todos state har uppdaterats');
    setInfo(!info); // om falskt sätt true, om true sätt falskt
  }, [todos]); // Denna useEffect körs varje gång todos state uppdateras och enbart detta

  const todoItems = todos.map((todo) => {
    return <TodoItem task={ todo.task } key={ todo.id } />
  });

  function addTodo(todoText) {
    const newTodo = {
      id: todos.length,
      task: todoText
    }

    const todoArrayCopy = [...todos]; // Skapa en kopia av arrayen
    todoArrayCopy.push(newTodo); // Pusha in den nya todon i vår array

    setTodos(todoArrayCopy); // Uppdatera vårt state med den nya arrayen
  }

  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodosCounter amount={ todos.length } />
      <ul>
        { todoItems }
      </ul>
      { info ? <p>Ny todo tillagd!</p> : '' }
      <AddTodo addTodo={ addTodo } />
    </div>
  );
}

export default App;
