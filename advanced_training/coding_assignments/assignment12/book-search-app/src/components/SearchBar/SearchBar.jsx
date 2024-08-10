import React, { useCallback, useEffect, useState } from 'react'
import _ from "lodash";

export default function SearchBar({onSubmit}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // debounce - delay the execution of a function
    const debounceOnSubmit = useCallback(_.debounce(onSubmit, 3000), [onSubmit]);

    // throttle - limit the frequency of a function call
    const throttleHandleChange = _.throttle(onSubmit, 3000);

    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        onSubmit(inputValue);
      }
    }

    useEffect(() => {
        debounceOnSubmit(inputValue);
    }, [inputValue]);
  return (
    <div className='searchbar-container'>
        <input value={inputValue} onChange={handleInputChange} placeholder='Type book name...' onKeyDown={handleKeyPress} />
        <button onClick={() => {onSubmit(inputValue)}}>Search</button>
    </div>
  )
}
