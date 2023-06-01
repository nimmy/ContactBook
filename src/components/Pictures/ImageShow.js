import React from 'react'

const ImageShow = (props) => {
  return (
    <img src={props.sinleImage.urls.regular} alt='props.urls.alt_description' />
  )
}

export default ImageShow