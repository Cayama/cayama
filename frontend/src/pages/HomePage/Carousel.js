import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Carousel() {
  const carouselImgs = useSelector(state => state.homePageReducer.carousel)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const setCarouselIndexFuncNext = () => {
    if (carouselIndex + 1 === carouselImgs.length) return setCarouselIndex(0)
    return setCarouselIndex(carouselIndex + 1)
  }

  const setCarouselIndexFuncPrevious = () => {
    if (carouselIndex === 0) return setCarouselIndex(carouselImgs.length - 1)
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
        <i className="small material-icons">{arrow}</i>
      </button>

    )
  }

  return (
    <div>
      <img src={carouselImgs[carouselIndex].url} alt="carousel" width="50%" />
      {carouselButton(setCarouselIndexFuncPrevious, "chevron_left")}
      {carouselButton(setCarouselIndexFuncNext, "chevron_right")}
    </div>
  );
}

export default Carousel;
