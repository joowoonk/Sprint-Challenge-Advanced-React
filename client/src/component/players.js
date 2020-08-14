import React from "react";
// import { useDarkMode } from "../hooks/useDarkMode";
function Players(props) {
  // console.log(props);
//   const [darkMode, setDarkMode] = useDarkMode("isDark");
  return (
    <div className="info">
        <h2 id="name" data-testid="name">
        {/* {props.info.name} */}
        </h2>
        <p id="country" data-testid="country">Country: 
        {/* {props.info.country} */}
        </p>
        <p id="searches" data-testid="searches">Searches: 
        {/* {props.info.searches} */}
        </p>

    </div>
  );
}
export default Players