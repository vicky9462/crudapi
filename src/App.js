import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import View from './component/student/View';
import Edit from './component/student/Edit';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/view/:id" element={<View/>}/>
      <Route exact path="/edit/:id" element={<Edit/>}/>
    </Routes>
  
  )
}

export default App;
   