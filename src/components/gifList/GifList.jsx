import GifShow from '../gifShow/GifShow'

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
    <>
        <h2>Gif Results:</h2>
        {gifs.length <= 0 ? <p>No Gifs to show, search a Gif!</p> : <></>}
        {gifs.length > 0 ? renderGifs : <></>}
        {gifs.length > 0 ? <button onClick={handleLoadMore}>Load More</button> : <></>}
    </>
  )
}
