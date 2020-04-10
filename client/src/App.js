import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import Fetch from './components/Fetch'

import useFetch from "./hooks/useFetch"
import DarkMode from './component/DarkMode'
// import Players from "./component/players"
import './App.css';
import Search from "./component/Search"

function App() {
  const res = useFetch("http://localhost:5000/api/players", {});
  // console.log("earaewr",res)
  if (!res.response) {
    return <div>Loading...</div>
  }
  const array = res.response;
  // console.log(array)
  

  return (
    <div>
      <h1>Women's World Cup</h1>
      <DarkMode />
      <Search array={array}/>
      {/* {array.map(res => {
        return( <Players info={res}key={res.id}/>)
      })} */}
    </div>
  );
}

export default App;
