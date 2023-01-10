import React from 'react';
import Home from './features/landing/Home.tsx';
import { Route } from 'react-router-dom';
import TaskPage from "./features/tasks/task-view/TaskPage.tsx";
import {Navigation} from "./features/_shared/Navigation";
import {Footer} from "./features/_shared/Footer";

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
