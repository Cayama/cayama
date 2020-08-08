import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Carousel() {
  const carouserImgs = useSelector(state => state.homePageReducer.carousel)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const setCarouselIndexFuncNext = () => {
    if (carouselIndex + 1 === carouserImgs.length) return setCarouselIndex(0)
    return setCarouselIndex(carouselIndex + 1)
  }

  const setCarouselIndexFuncPrevious = () => {
    if (carouselIndex === carouserImgs.length - 1) return setCarouselIndex(carouserImgs.length)
    return setCarouselIndex(carouselIndex - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval)
      setCarouselIndexFuncNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselIndex])

  const carouselButton = (changePicture, arrow) => {
    return (
      <button type="button" onClick={() => changePicture()}>
        <i class="small material-icons">{arrow}</i>
      </button>
    )
  } 

  return (
    <div>
      <img src={carouserImgs[carouselIndex].url} alt="carousel image" width="50%" />
      {carouselButton(setCarouselIndexFuncPrevious, "chevron_left")}
      {carouselButton(setCarouselIndexFuncNext, "chevron_right")}
      <button type="button" onClick={() => setCarouselIndexFuncNext()}>
        Next
      </button>
    </div>
  );
}

export default Carousel;