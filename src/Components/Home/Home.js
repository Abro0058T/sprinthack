import { useState } from "react";

import "./Home.css";

import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultsList } from "../SearchResultsList/SearchResultsList";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="Home">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

export default Home;
