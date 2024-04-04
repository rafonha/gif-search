import styled from "styled-components";

export const SearchBarContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

export const TitlePage = styled.h1`
    text-align: center;
`;

export const SearchForm = styled.form`
    display: flex;
    flex-flow: row nowrap;
`;

export const InputParam = styled.input`
    padding: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid lightgray;
    margin: 10px;
    margin-right: 0;
    width: 100%;
`;

export const SearchButton = styled.button`
    background-color: coral;
    border: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    margin: 10px;
    margin-left: 0;
    width: 100%;
    max-width: 15%;
`;

export const ClearButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const ClearButton = styled.button`
    padding: 10px;
    background-color: crimson;
    border: 0;
    border-radius: 5px;
    color: white;
    margin: 10px;
    width: 100%;
    max-width: 15%;
`;