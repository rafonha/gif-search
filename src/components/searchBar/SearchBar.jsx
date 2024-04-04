import React, { useState } from 'react'
import { 
    ClearButton,
    ClearButtonContainer,
    InputParam, 
    SearchBarContainer, 
    SearchButton,
    SearchForm, 
    TitlePage } from './SearchBar.style';

export default function SearchBar({
    onSubmit = () => {},
    onClick = () => {}
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
        onClick();
        setSearchParam('');
    };

  return (
    <SearchBarContainer>
        <TitlePage>Gifs with Giphy</TitlePage>
        <SearchForm onSubmit={handleClick}>
            <InputParam type="text" name="paramInput" id="paramInput" onChange={onChange} value={searchParam} placeholder='Search all gifs and stickers' />
            <SearchButton type="submit" id="submitSearch">Search</SearchButton>
        </SearchForm>
        <ClearButtonContainer>
            <ClearButton type="button" id="cleanSearch" onClick={clearSearchParam}>Clear Search</ClearButton>
        </ClearButtonContainer>
    </SearchBarContainer>
  )
}
