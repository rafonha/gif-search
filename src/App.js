import { useState } from "react";
import GifList from "./components/gifList/GifList";
import SearchBar from "./components/searchBar/SearchBar";
import { axiosAPI } from "./api";

function App() {

  const [searchParam, setSearchParam] = useState('')
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleSearchParam = async (param) =>{
    setSearchParam(param);

    searchAPI(param);
  }

  const searchAPI = async (param, offset) => {
    let searchResults = await axiosAPI(param, offset);

    let newSearchResult = [...gifs, ...searchResults];

    setGifs(newSearchResult);
  }

  const clearSearch = () => {
    setGifs([]);
    setOffset(0);
  };

  const loadMore = async (limit) => {
    const newOffset = offset + limit;
    setOffset(newOffset);

    searchAPI(searchParam, newOffset);
  }

  return (
    <>
      <h1>Search Gifs</h1>
      <SearchBar onSubmit={handleSearchParam} onClear={clearSearch} />
      <GifList gifs={gifs} handleLoadMore={loadMore} />
    </>
  );
}

export default App;
