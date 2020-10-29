import React, { useContext } from 'react';

// components
import Image from 'gatsby-image';

// utils
import useImageSharpById from '../utils/useImageSharpById';
import WindowContext from '../context/WindowContext';

const ImageWrapper = ({id}) => {

  const { imageRatio } = useContext(WindowContext);
  const image = useImageSharpById(id);

  const style = {
    width: `${ image.fluid.presentationWidth * imageRatio }px`,
    height: `${ image.fluid.presentationHeight * imageRatio }px`,
  }

  return (
    <div className={'image-wrapper'} style={style}>
      <Image fluid={image.fluid} imgStyle={style} style={style}/>
    </div>
  )

}

export default ImageWrapper;