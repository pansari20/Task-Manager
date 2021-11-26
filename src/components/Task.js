import React from 'react'

const Task = (props) => {

    const toDelete = ()=>{
        props.tasks.splice(props.num-1,1);
        props.setTasks([...props.tasks]);
    }

    return (
        <p className="task-item">
            {props.num}. {props.text} 
            <button onClick={toDelete} className="btn">Delete</button>
        </p>
    )
}

export default Task
