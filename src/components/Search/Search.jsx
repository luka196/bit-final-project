import React from "react";
import "./search.scss";

const Search = ({ searchString, setSearchString }) => {
  return (
    <div className="search">
      <div>
        <img
          className="picture"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          alt="img"
        />
        <input
          value={searchString}
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
