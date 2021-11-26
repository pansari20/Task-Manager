import './App.css';
import Task from './components/Task'
import { useState, useEffect } from 'react';

function App() {

  const getLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem('text'));
  }
  
  const [tasks, setTasks] = useState(getLocalStorage());
  const [text, setText] = useState('');

  useEffect( () => {
    localStorage.setItem('text', JSON.stringify(tasks))
  }, [tasks])

  const onChangeTask = (e) => {
    setText(e.target.value);
  }

  const submitTask = () => {
    setTasks([...tasks, text]);
    setText('')
  }

  const isDisabled = (text) => {
    if (text === '') return true;
    return false;
  }

  return (
    <>
      <div className="container">
        <h1 id="main-heading">Task Manager</h1>
        <form>
          <div className="add-task">
            <input type="text" placeholder="Task to add" value={text} onChange={onChangeTask} />
            <button className="btn" onClick={submitTask} disabled={isDisabled(text)} >Add</button>
          </div>
        </form>
        <div id="display-task">
          {tasks.map((task, index) => {
            return <Task num={index + 1} text={task} tasks={tasks} setTasks={setTasks} />
          })}
        </div>
      </div>
    </>
  );
}

export default App;
