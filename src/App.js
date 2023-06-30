
import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
    const [toDos, setTodos] = useState([]);
    const [toDo, setTodo] = useState('')
    const dayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    return (
        <div>
            <div className="app">
                <div className="mainHeading">
                    <h1>ToDo List</h1>
                </div>

                <div className="subHeading">

                    <br />
                    <h2>Whoop, it's {dayList[new Date().getDay()]} 🌝 ☕ </h2>
                
                <br />
                <p>Each day I will accomplish one thing on my to do list.</p>
            </div>
            <div className="input">
                <input type="text" placeholder="🖊️ Add item..." onChange={(e) => {
                    setTodo(e.target.value)
                }} />
                <i onClick={() => {
                    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
                }} className='fas fa-plus'></i>

            </div>
            <div className="todos">
                {
                    toDos.map((obj) => {
                        if (obj.status) {
                            return null;
                        }
                        return (
                            <div className="todo" key={obj.id}>
                                <div className="left">
                                    <input
                                        onChange={(e) => {
                                            console.log(e.target.checked);
                                            console.log(obj);
                                            setTodos(
                                                toDos.map((obj2) => {
                                                    if (obj2.id === obj.id) {
                                                        obj2.status = e.target.checked;
                                                    }
                                                    return obj2;
                                                })
                                            );
                                        }}
                                        obj={obj.status}
                                        type="checkbox"
                                        name=""
                                        id=""
                                    />
                                    <p>{obj.text}</p>
                                </div>
                                <div className="right">
                                    <i
                                        className="fas fa-times"
                                        onClick={(e) => {
                                            setTodos(
                                                toDos.filter((obj2) => {
                                                    return obj2.id !== obj.id;
                                                })
                                            );
                                        }}
                                    ></i>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className='completeTask'>
                {toDos.some((obj) => obj.status) && <h1 className='mainHeading'>Complete Task</h1>}
                {
                    toDos.map((obj) => {
                        if (obj.status) {
                            return (
                                <div className='input-list'>
                                    <input type="text" value={obj.text} />
                                </div>
                            );
                        }
                        return null;
                    })
                }
            </div>




        </div>

        </div >

    );


}

export default App;