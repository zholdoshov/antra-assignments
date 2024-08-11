import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { fetchBooks } from '../../api/booksAPI';
import _ from "lodash";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
      if (query.trim()) {
        dispatch(fetchBooks(query));
      }
    };

    const handleInputChange = (e) => {
      setQuery(e.target.value);
    }

    // debounce - delay the execution of a function
    const debounceOnSubmit = useCallback(_.debounce(handleSearch, 3000), [handleSearch]);

    // throttle - limit the frequency of a function call
    const throttleHandleChange = _.throttle(handleSearch, 3000);

    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        handleSearch();
      }
    }

    useEffect(() => {
        debounceOnSubmit(query);
    }, [query]);

  return (
    <div className='searchbar-container'>
        <input value={query} onChange={handleInputChange} placeholder='Search for books...' onKeyDown={handleKeyPress} />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}
