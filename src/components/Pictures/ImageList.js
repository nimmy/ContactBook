import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({images}) => {
  const randomImage = images.map(image => <ImageShow key={image.id} sinleImage={image} />); 
  return (
    <div className='image-list'>{randomImage}</div>
  )
}
export default ImageList;