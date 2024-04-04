import React from 'react'
import { GifShowContainer } from './GifShow.style'

export default function GifShow({ gif }) {
  return (
    <GifShowContainer>
        <img src={gif.images.fixed_height_small.url} alt={gif.title} />
    </GifShowContainer>
  )
}
