import { useState ,useEffect} from "react";

import "./Home.css";

import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultsList } from "../SearchResultsList/SearchResultsList";
import HospitalCard from "../HospitalCard/HospitalCard";
import Header from "../Header/Header";


function Home() {
  const [results, setResults] = useState([]);
  return (
    <div className="Home">
      <Header/>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
      <div style={{marginTop:"2em",display:"flex",flexWrap:"wrap"}}>
    <HospitalCard />
     
 
 

      </div>
    </div>
  );
}

export default Home;
