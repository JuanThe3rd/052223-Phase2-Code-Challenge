import React from "react";

function Search({handleSearchChange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={event => handleSearchChange(event.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
