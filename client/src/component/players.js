import React from "react";
// import { useDarkMode } from "../hooks/useDarkMode";
function Players(props) {
//   console.log(props);
//   const [darkMode, setDarkMode] = useDarkMode("isDark");
  return (
    <div className="info">
        <h2>{props.info.name}</h2>
        <p>Country: {props.info.country}</p>
        <p>Searches: {props.info.searches}</p>

    </div>
  );
}
export default Players