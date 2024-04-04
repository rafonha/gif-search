import React from 'react'

export default function GifShow({ gif }) {
  return (
    <>
        <img src={gif.images.fixed_height_small.url} alt={gif.title} />
    </>
  )
}
