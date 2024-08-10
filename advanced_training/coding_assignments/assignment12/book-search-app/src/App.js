import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import WishList from "./components/WishList/WishList";
import { getBooksByName } from "./api/server";

function App() {
  const [books, setBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  // const handleSearch = async (query) => {
  //   if (query.trim()) {
  //     const response = await fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
  //     );
  //     const data = await response.json();
  //     setBooks(data.items);
  //     console.log(data.items);
  //   }
  // };

  const handleSearch = async (query) => {
    if (query.trim()) {
      const response = await getBooksByName(query);
      setBooks(response);
    }
  };

  const handleAddToWishList = (book) => {
    setWishList([book, ...wishList]);
  };

  return (
    <div className="App">
      <div className="left-col">
        <SearchBar onSubmit={handleSearch} />
        <SearchResults books={books} />
      </div>
      <div className="right-col">
        <WishList />
      </div>
    </div>
  );
}

export default App;
