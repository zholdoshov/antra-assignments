// import React, { useCallback, useEffect, useState } from 'react'
// import { useDispatch } from "react-redux"
// import { fetchBooks } from '../../api/booksAPI';
// import { IoIosSearch } from "react-icons/io";
// import _ from "lodash";

// export default function SearchBar() {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();

//     const handleSearch = () => {
//       if (query.trim()) {
//         dispatch(fetchBooks(query));
//       }
//     };

//     const handleInputChange = (e) => {
//       setQuery(e.target.value);
//     }

//     // debounce - delay the execution of a function
//     const debounceOnSubmit = useCallback(_.debounce(handleSearch, 3000), [handleSearch]);

//     // throttle - limit the frequency of a function call
//     const throttleHandleChange = _.throttle(handleSearch, 3000);

//     const handleKeyPress = (event) => {
//       if(event.key === 'Enter'){
//         handleSearch();
//       }
//     }

//     useEffect(() => {
//         debounceOnSubmit(query);
//     }, [query]);

//   return (
//     <div className='searchbar-container'>
//       <div className='input-box'>
//         <IoIosSearch className='search-icon' />
//       <input value={query} onChange={handleInputChange} placeholder='Search for books...' onKeyDown={handleKeyPress} />
//       </div>
//         <button onClick={handleSearch}>Search</button>
//     </div>
//   )
// }


import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchBooks } from '../../api/booksAPI';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import _ from "lodash";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [fetchEnabled, setFetchEnabled] = useState(true); // Flag to control API calls
    const dispatch = useDispatch();

    // Fetch autocomplete suggestions with debouncing
    const fetchSuggestions = useCallback(
      _.debounce(async (searchTerm) => {
        if (searchTerm && fetchEnabled) {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=10`);
          setSuggestions(response.data.items.map(book => book.volumeInfo.title));
        }
      }, 300),
      [fetchEnabled] // Dependency on fetchEnabled flag
    );

    // Search for books based on the query
    const handleSearch = () => {
      if (query.trim()) {
        dispatch(fetchBooks(query));
        setSuggestions([]);  // Clear suggestions after search
      }
    };

    const handleInputChange = (e) => {
      setFetchEnabled(true);  // Enable fetching when the user types
      setQuery(e.target.value);
    };

    // Handle key press (Enter key)
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };

    // Fetch suggestions on query change
    useEffect(() => {
        fetchSuggestions(query);
    }, [query, fetchSuggestions]);

    const handleSuggestionClick = (suggestion) => {
      setFetchEnabled(false);  // Disable fetching when a suggestion is clicked
      setQuery(suggestion);
      setSuggestions([]);
      dispatch(fetchBooks(suggestion));
    };

    return (
      <>
        <div className='searchbar-container'>
          <div className='input-box'>
            <IoIosSearch className='search-icon' />
            <input 
              value={query} 
              onChange={handleInputChange} 
              placeholder='Search for books...' 
              onKeyDown={handleKeyPress} 
            />
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
        {suggestions.length > 0 && (
          <ul className='suggest-list'>
            {suggestions.map((suggestion, index) => (
              <li className='suggest-item' key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </>
    );
}
