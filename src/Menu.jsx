import React from 'react';
import {NavLink} from 'react-router-dom';
import "./App.css";

const Menu=()=>{
    return (
      <>
        <div className="dashboard">
          <NavLink activeClassName="active_class" to="/">
            Bar Chart
          </NavLink>

          <NavLink activeClassName="active_class" to="/LineChart">
            Line Chart
          </NavLink>

          <NavLink activeClassName="active_class" to="/Dmodel">
            Dmodel
          </NavLink>

          <NavLink activeClassName="active_class" to="/Tables">
            Tables
          </NavLink>
        </div>
      </>
    );
}

export default Menu;