import GifShow from '../gifShow/GifShow'
import { GifListContainer, GifResultsContainer, LoadMoreButton, LoadMoreButtonContainer, TitleList } from './GifList.style'

export default function GifList({
    gifs = [],
    handleLoadMore = () => {}
}) {
    const renderGifs = gifs.map(gif => {
        return <>
            <GifShow gif={gif} key={gif.id} />
        </>
    })


  return (
    <GifListContainer>
        <TitleList>Gif Results:</TitleList>
        <GifResultsContainer>
            {gifs.length <= 0 ? <p>No Gifs to show, search a Gif!</p> : <></>}
            {gifs.length > 0 ? renderGifs : <></>}
            <LoadMoreButtonContainer>
                {gifs.length > 0 ? <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton> : <></>}
            </LoadMoreButtonContainer>
        </GifResultsContainer>
    </GifListContainer>
  )
}
