import React, {useState, useEffect} from "react"
import Players from "./Players"


const Search = (props) => {
    // console.log(props.array)
      
        // searchTerm will save the data from the search input on every occurance of the change event
        // in other words...this searches by each letter of the name/string
        const [searchTerm, setSearchTerm] = useState("");
        // searchResults is used to set search result
        // in other words...this is so that we know it is searching through an array
        const [searchResults, setSearchResults] = useState([]);
      
        useEffect(() => {
          const results = props.array.filter(character =>
        //    {console.log(character.name)
            character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        // }
          );
          setSearchResults(results);
        }, [searchTerm]);
      
        // The handleChange method takes the event objects as the argument and sets the currect value of the form to the searchTerm state using setSearchTerm
        // in other words...when a user types in the form it will narrow the search with each strign that matches the strings in the character array
        const handleChange = event => {
          setSearchTerm(event.target.value);
        };
    return(
        <div>
            <form className="form">
        {/* this makes sure that when a user types it looks for the html that matches */}
        <label className="search" htmlFor="name">
          Search:
        </label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Filter by First Name"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      {searchResults.map(res => {
        return( <Players info={res}key={res.id}/>)
      })}
        </div>
    )
}

export default Search