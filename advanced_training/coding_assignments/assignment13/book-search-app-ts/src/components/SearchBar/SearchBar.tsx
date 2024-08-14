import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../api/booksAPI";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import _ from "lodash";
import "./SearchBar.css";
import { AppDispatch } from "../../app/store";
import { Book } from "../../types/types";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [fetchEnabled, setFetchEnabled] = useState<boolean>(true);
  const [activeOption, setActiveOption] = useState<number>(-1);
  const [activeSuggestions, setActiveSuggestions] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const fetchSuggestions = useCallback(
    _.debounce(async (searchTerm: string) => {
      if (searchTerm && fetchEnabled) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=10`
        );
        setSuggestions(
          response.data.items.map((book: Book) => book.volumeInfo.title)
        );
        setActiveSuggestions(true);
      }
    }, 300),
    [fetchEnabled]
  );

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchBooks(query));
      setSuggestions([]);
      setFetchEnabled(true);
      setActiveSuggestions(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFetchEnabled(true);
    setQuery(e.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setActiveOption((prev) => {
        return prev < suggestions.length - 1 ? prev + 1 : prev;
      });
    } else if (event.key === "ArrowUp") {
      setActiveOption((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
    } else if (event.key === "Enter") {
      if (activeOption > -1) {
        setQuery(suggestions[activeOption]);
        dispatch(fetchBooks(suggestions[activeOption]));
        setFetchEnabled(false);
        setSuggestions([]);
        setActiveSuggestions(false);
        setActiveOption(-1);
      } else {
        handleSearch();
      }
    } else if (event.key === "Escape") {
      setFetchEnabled(false);
      setSuggestions([]);
      setActiveSuggestions(false);
    }
  };

  useEffect(() => {
    fetchSuggestions(query);
  }, [query, fetchSuggestions]);

  const handleSuggestionClick = (suggestion: string) => {
    setFetchEnabled(false);
    setQuery(suggestion);
    setSuggestions([]);
    dispatch(fetchBooks(suggestion));
  };

  return (
    <div className="searchbar-container">
      <div className="row-input-search">
        <div
          className="input-box"
          style={
            activeSuggestions
              ? {
                  borderRadius: "10px 10px 0 0",
                  borderTop: "1px solid black",
                  borderLeft: "1px solid black",
                  borderRight: "1px solid black",
                }
              : { borderRadius: "10px", border: "1px solid black" }
          }
        >
          <IoIosSearch id="search-icon" />
          <input
            value={query}
            onChange={handleInputChange}
            placeholder="Search for books..."
            onKeyDown={handleKeyPress}
            onBlur={() => {
              setTimeout(() => {
                setFetchEnabled(false);
                setSuggestions([]);
                setActiveSuggestions(false);
                setActiveOption(-1);
              }, 100);
            }}
          />
        </div>
        <div>
          {suggestions.length > 0 && (
            <ul className="suggest-list">
              {suggestions?.map((suggestion, index) => (
                <li
                  className={`suggest-item ${
                    index === activeOption ? "active-option" : ""
                  }`}
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
