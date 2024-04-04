import styled from "styled-components";

export const GifListContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

export const GifResultsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const TitleList = styled.h2`
    text-align: center;
`;

export const LoadMoreButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const LoadMoreButton = styled.button`
    padding: 10px;
    background-color: coral;
    border: 0;
    border-radius: 5px;
    color: white;
    margin: 10px;
    width: 100%;
    max-width: 15%;
`;