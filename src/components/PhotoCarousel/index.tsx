import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  photos: string[];
  itemWidth?: number;
  itemHeight?: number;
  itemMarginRight?: number;
  animationTime?: number;
}

const PhotoCarousel: React.FC<Props> = ({ photos = [], itemWidth = 180, itemHeight = 80, itemMarginRight = 20, animationTime= 60 }) => {
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-${itemWidth + itemMarginRight}px * ${photos.length}));
    }
  `;

  const PhotoContainer = styled.div`
    display: inline-flex;
    overflow-x: scroll;
    animation: ${scroll} ${animationTime}s linear infinite;
  `;
  const Img = styled.img`
      width: ${itemWidth}px;
      height: ${itemHeight}px;
      margin-right: ${itemMarginRight}px;
    `
  return (
    <div className="logo-wall">
      <div className="scroll-mask" />
      <PhotoContainer className="gap-0">
        {photos.map((photo) => (<Img key={photo} src={photo} />))}
        {photos.map((photo) => (<Img key={photo} src={photo} />))}
      </PhotoContainer>
    </div>
  );
};

export default PhotoCarousel;