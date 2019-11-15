import React, { useState, useRef, useLayoutEffect} from 'react';
import DogBreeds  from '../components/DogBreeds';
import SearchInput from '../components/SearchInput';
import Results from '../components/Results';
const SearchBox =()=>{
    
    const [query, setQuery] = useState("dog");
    const results = query.length <2?[] : DogBreeds.filter(DogBreed=>{
        return DogBreed.includes(query);
    }).slice(0,5);

    return(
        <div className ="searchbar">
            <SearchInput onChange = {setQuery} query={query} />
            <Results data={results} />
        </div>
    )
}
export default SearchBox;