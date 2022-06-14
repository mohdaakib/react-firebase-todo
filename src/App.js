import React,{useEffect, useState} from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  //when the app loads,we need to listen to the database and fetch new todos as they get added/removed
  useEffect(()=>{
    //this code here.. fires when the app loads
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data().todo)) // it returns array of objects without .todo
     })
  },[])


  const addTodo=(event)=>{
    //this will fire off when we click the button
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput(''); // it will clear up the input when we hit the button
  }
  return (
    <div className="App">
     <h1>hello Mohd Aakib</h1>
     <form >
      <input value={input} onChange={event=>setInput(event.target.value)}/>
      <button disabled={!input} /* it will not add the empty string when we click the empty input */  type= "submit" onClick={addTodo}>Add Todo</button> 
     </form>
     <ul>
     {todos.map(todo=>(
     <Todo text={todo}/>
     //<li>{todo}</li>
     ))}
     </ul> 
    </div>
  );
}

export default App;
