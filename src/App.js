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

    if(gifs.length > 0){
      setGifs([]);
      setOffset(0);
    }

    searchAPI(param, offset);
  }

  const searchAPI = async (param, offset) => {
    let searchResults = await axiosAPI(param, offset);
    let newSearchResult = [];

    newSearchResult = [...gifs, ...searchResults];
    setGifs(newSearchResult);
  }

  const clearSearch = () => {
    setGifs([]);
    setOffset(0);
  };

  const loadMore = async () => {
    const newOffset = offset + 25;
    setOffset(newOffset);

    searchAPI(searchParam, newOffset);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearchParam} onClick={clearSearch} />
      <GifList gifs={gifs} handleLoadMore={loadMore} />
    </>
  );
}

export default App;
