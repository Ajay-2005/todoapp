
import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
    const [toDos, setTodos] = useState([]);
    const [toDo, setTodo] = useState('')

    return (
        <div>
           
            
               
            



            <div className="app">
                <div className="mainHeading">
                    <h1>ToDo List</h1>
                </div>

                <div className="subHeading">
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
                            return (
                                <div className="todo" key={obj.id}>
                                    <div className="left">
                                        <input onChange={(e) => {
                                            console.log(e.target.checked)
                                            console.log(obj)
                                            setTodos(toDos.filter((obj2) => {
                                                if (obj2.id === obj.id) {
                                                    obj2.status = e.target.checked
                                                }
                                                return obj2
                                            }))
                                        }} obj={obj.status} type="checkbox" name="" id="" />
                                        <p>{obj.text}</p>
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-times" onClick={(e) => {
                                            setTodos(toDos.filter((obj2) => {
                                                let temp;
                                                if (obj2.id !== obj.id) {
                                                    temp = obj2
                                                }
                                                return temp;
                                            }))
                                        }}></i>
                                    </div>
                                </div>)
                        }
                        )}

                </div>



            </div>

        </div>

    );


}

export default App;