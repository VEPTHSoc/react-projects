import React, { useState, useRef, useLayoutEffect} from 'react';
import './SearchInput.scss';
const SearchInput =({query, onChange}) =>{
    return(
        <label className="search">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        className="search-input"
        placeholder="Search for dog breeds"
        type="search"
        defaultValue={query}
        onChange={event => {
          onChange(event.target.value);
        }}
        />
        </label>
    )
}

export default SearchInput;