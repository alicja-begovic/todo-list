import React from "react";

import Header from "./components/Header/Header.jsx";
import { DAILY_LIST } from "./data.js";
import ListItem from "./components/ListItem/ListItem.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <h2>My list</h2>
      <ul>
        {DAILY_LIST.map(dailyList => 
          <ListItem {...dailyList} />
        )}
      </ul>
    </div>
  );
}

export default App;
