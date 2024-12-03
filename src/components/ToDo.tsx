import React, { useState } from 'react';
import '../styles/ToDo.css';

function ToDoProyect() {

    interface Task {
        title: string,
        category: string,
        completed: boolean
    }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchedTasks, setSearchedTasks] = useState<Task[]>([]);
  const [searching, setSearching] = useState<boolean>(false);

  let title :string = "";
  let category :string = ""; 

  function handleTaskForm(event){
    switch (event.target.name) {
        case "title":
            title = event.target.value;
            break;

        case "category":
            category = event.target.value;
            break;
    }
  }

  function handleAddNewTask (event: React.MouseEvent){
    if(!title || !category){
        alert("You need to complete the title and category fields!")
    }
    else{
        setTasks([
            ...tasks,
            {
                title,
                category,
                completed: false
            }
        ]);
        title = "";
        category = "";
    }
  }

  function handleDeleteTask(event){
    setTasks(tasks.filter(task => task.title !== event.target.name))
  }

  function handleCompleteTask(event){
    let taskTitle = event.target.name;
    let tasksUpdated = tasks.map(task=>{
        if(task.title === taskTitle){
            task.completed = !task.completed;
        }
        return task;
    })
    setTasks(tasksUpdated);
  }

  function handleSearch(event){
    let search = event.target.value.toLowerCase();
    setSearchedTasks(tasks.filter(task => task.title.toLowerCase().includes(search)));
    setSearching(true);
  }

  return (
    <div className="panContent">
            <div className="appCont">
                <h1 className="title">Developer To Do List.</h1>
                <div className="logicCont">
                    <div className="addCont">
                        <h4>Add a new task:</h4>
                        <div className="addForm">
                            <input id="addInput" type="text" placeholder="What do you have to do?" name='title' onChange={handleTaskForm}/>
                            <select id="addSelect" onChange={handleTaskForm} name='category'>
                                <option>Select Category</option>
                                <option>BackEnd</option>
                                <option>FrontEnd</option>
                                <option>UX-UI</option>
                                <option>DevOps</option>
                                <option>Proyect</option>
                            </select>
                        </div>
                        <button id="addBtn" onClick={handleAddNewTask}>ADD</button>
                    </div>
                    <div className="searchContent">
                        <h4>Search a task</h4>
                        <input id="searchInput" type="text" placeholder="Search a task by name" onChange={handleSearch}/>
                        <button id="showAllBtn" onClick={() =>{setSearching(false)}}>Show All</button>
                    </div>
                </div>

                <h2 className="title">Tasks list:</h2>

                <div id="list">
                    {
                       searching === false ? tasks.map(task =>{
                        if(!task.completed){
                            return(
                                <div className="taskCont">
                                    <h4 className="task-title">{task.title}</h4>
                                    <p className="task-category">Category: {task.category}</p>
                                    <button className="deleteBtn" name={task.title} onClick={handleCompleteTask}>Complete</button>
                                    <button className="deleteBtn" name={task.title} onClick={handleDeleteTask}>Delete</button>
                                </div>
                            )
                        }
                        else {
                            return(
                                <div className="taskCont">
                                    <h4 className="task-title" style={{ textDecoration: 'line-through', backgroundColor: '#7feb7c'}}>{task.title}</h4>
                                    <p className="task-category">Category: {task.category}</p>
                                    <button className="deleteBtn" name={task.title} onClick={handleCompleteTask}>Complete</button>
                                    <button className="deleteBtn" name={task.title} onClick={handleDeleteTask}>Delete</button>
                                </div>
                            )
                        }
                        })
                        :
                        searchedTasks.map(task =>{
                            if(!task.completed){
                                return(
                                    <div className="taskCont">
                                        <h4 className="task-title">{task.title}</h4>
                                        <p className="task-category">Category: {task.category}</p>
                                        <button className="deleteBtn" name={task.title} onClick={handleCompleteTask}>Complete</button>
                                        <button className="deleteBtn" name={task.title} onClick={handleDeleteTask}>Delete</button>
                                    </div>
                                )
                            }
                            else {
                                return(
                                    <div className="taskCont">
                                        <h4 className="task-title" style={{ textDecoration: 'line-through', backgroundColor: '#7feb7c'}}>{task.title}</h4>
                                        <p className="task-category">Category: {task.category}</p>
                                        <button className="deleteBtn" name={task.title} onClick={handleCompleteTask}>Complete</button>
                                        <button className="deleteBtn" name={task.title} onClick={handleDeleteTask}>Delete</button>
                                    </div>
                                )
                            }
                            })
                    }
                </div>

            </div>
        </div>
  );
}

export default ToDoProyect;