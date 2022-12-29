import React from 'react';
import Home from './tasks/views/Home.jsx';
import NewTodo from "./tasks/views/NewToDo";
import { Route } from 'react-router-dom';

const App = () => {
  return ( <div className = 'App' >
    <div className = 'Routes' > 
      <Route exact path='/' component = { Home } />
      <Route exact path='/todos' component = { NewTodo } />
    </div>
  </div> )
}

export default App;
