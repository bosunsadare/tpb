import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input 
                name="searchbox"
                className="pa3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder="Search Robo friends..."
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;