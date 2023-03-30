import React from 'react';
import { Route } from 'react-router-dom';
import {Routes , Switch} from 'react-router-dom';
import BarChart from "./pages/BarChart";
import LineChart from "./pages/LineChart";
import Error from './pages/Error';
import Dmodel from "./pages/Dmodel";
import Tables from "./pages/Tables"
import Menu from './Menu';
const App=()=>{
return (
  <>
    <Menu />

    <Routes>
      <Route exact path="/" element={<BarChart />} />
      <Route path="/LineChart" element={<LineChart />} />
      <Route path="/Dmodel" element={<Dmodel />} />
      <Route path="/Tables" element={<Tables />} />
    </Routes>
  </>
);

}
export default App;