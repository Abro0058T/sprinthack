import React from "react";

import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div className="list-item" key={id}>
            {result.name}
          </div>
        );
      })}
    </div>
  );
};
