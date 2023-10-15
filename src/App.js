import './App.css';

import Home from './pages/Home';
import AddMenuItem from './pages/AddMenuItem';
import DeleteMenuItem from './pages/DeleteMenuItem';
import UpdateMenuItem from './pages/UpdateMenuItem';

import {   BrowserRouter as Router,   Routes, Route } from 'react-router-dom';


function App() {
  return (

      <Router>
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/adminItem" element={ <AddMenuItem /> } />
              <Route exact path="/adminDelete" element={ <DeleteMenuItem /> } />
              <Route exact path="/adminUpdate" element={ <UpdateMenuItem /> } />
          </Routes>
      </Router>


  ); //end Return


} // end App

export default App;
