import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTodoList } from './actions/todoActions';

import AddTodo from './components/AddTodo';
import TodosCounter from './components/TodosCounter';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: 'Köp kaffe' },
    { id: 1, task: 'Köp kaka' },
    { id: 2, task: 'Brygg kaffe' },
    { id: 3, task: 'Drick kaffe' }
  ]);
  const [info, setInfo] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Körs enbart vid sidladdning');
    async function getTodos() {
      const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks');
      const data = await response.json();

      console.log(data);
      dispatch(getTodoList(data.todos));
    }

    getTodos();
  }, []); // Denna useEffect körs enbart en gång när sidan laddas och aldrig mer

  useEffect(() => {
    console.log('Todos state har uppdaterats');
    setInfo(!info); // om falskt sätt true, om true sätt falskt
  }, [todos]); // Denna useEffect körs varje gång todos state uppdateras och enbart detta

  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodosCounter />
      <TodoList />
      { info ? <p>Ny todo tillagd!</p> : '' }
      <AddTodo />
    </div>
  );
}

export default App;
