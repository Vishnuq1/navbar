import React from 'react';
import { Route } from 'react-router-dom';
import {Routes , Switch} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Error from './Error';
import Menu from './Menu';
const App=()=>{
return(
  <>
  <Menu />
  <Routes>
  <Route exact path='/' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />

  <Route path='/*' element={<Error/>} />
</Routes>

  </>
);

}
export default App;