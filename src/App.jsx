import React from 'react';
import Home from './features/landing/Home.jsx';
import { Route } from 'react-router-dom';
import TaskPage from "./features/tasks/task-view/TaskPage.tsx";

const App = () => {
  return ( <div className = 'App' >
    <div className = 'Routes' > 
      <Route exact path='/' component = { Home } />
      <Route exact path='/todos' component = { TaskPage } />
    </div>
  </div> )
}

export default App;
