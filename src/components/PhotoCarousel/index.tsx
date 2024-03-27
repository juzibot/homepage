import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  photos: string[];
  itemWidth?: number;
  itemHeight?: number;
  itemMarginRight?: number;
  itemMarginBottom?: number;
  animationTime?: number;
}

const PhotoCarousel: React.FC<Props> = ({ photos = [], itemWidth = 180, itemHeight = 80, itemMarginRight = 20, itemMarginBottom = 50, animationTime= 60 }) => {
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-${itemWidth + itemMarginRight}px * ${photos.length}));
    }
  `;

  const Box = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
  `;
  const Mask = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), #fff);
    pointer-events: none;
    position: absolute;
  `;
  const PhotoContainer = styled.div`
    display: inline-flex;
    overflow-x: scroll;
    animation: ${scroll} ${animationTime}s linear infinite;
  `;
  const imgStyle = {
    width: `${itemWidth}px`,
    height: `${itemHeight}px`,
    marginRight: `${itemMarginRight}px`,
    marginBottom: `${itemMarginBottom}px`,
  }
  return (
    <Box>
      <Mask/>
      <PhotoContainer className="gap-0" style={{columnGap: 10}}>
        {photos.map((photo) => (<img style={imgStyle} alt="" key={photo} src={photo} />))}
        {photos.map((photo) => (<img style={imgStyle} alt="" key={photo} src={photo} />))}
      </PhotoContainer>
    </Box>
  );
};

export default PhotoCarousel;