import React, { useState } from 'react'

export default function SearchBar({
    onSubmit = () => {},
    clearSearch = () => {}
}) {
    const [searchParam, setSearchParam] = useState('')

    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(searchParam);
    };

    const onChange = (element) => {
        setSearchParam(element.target.value)
    };

    const clearSearchParam = () => {
        setSearchParam('')
        clearSearch();
    };

  return (
    <>
        <form onSubmit={handleClick}>
            <input type="text" name="paramInput" id="paramInput" onChange={onChange} value={searchParam} />
            <button type="submit" id="submitSearch">Search</button>
        </form>
        <button type="button" id="cleanSearch" onClick={clearSearchParam}>Clear Search</button>
    </>
  )
}
