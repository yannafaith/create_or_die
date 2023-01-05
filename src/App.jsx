import React from 'react';
import Home from './features/landing/Home.jsx';
import { Route } from 'react-router-dom';
import TaskPage from "./features/tasks/task-view/TaskPage.tsx";
import {Navigation} from "./features/Navigation";
import {Footer} from "./features/Footer";

const App = () => {
  return (
      <div className='App' >
        <Navigation />
        <div className='Routes' >
          <Route exact path='/' component = { Home } />
          <Route exact path='/todos' component = { TaskPage } />
        </div>
        <Footer />
    </div>
  )
}

export default App;
