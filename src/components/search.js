import React from 'react';
import Searchimg from './searchimg2.jpg'
import Searching from './searching.jpg'
import Searching1 from './search1.jpg'


function Search() {
  return (
      <div className="containers">
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
      <div className="search">
      <div className="small_container">
      <h1>Search page!</h1>
      </div>
      <label for="Search"></label>
      <input type="text" id="Search" name="Search" placeholder="Search..."/>
      </div>
      </div>




  );
}

export default Search;
