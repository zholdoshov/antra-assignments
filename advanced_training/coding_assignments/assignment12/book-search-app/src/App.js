import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <div className="left-col">
        <SearchBar />
        <SearchResults />
      </div>
      <div className="right-col">
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
