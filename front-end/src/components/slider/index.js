import React from 'react';
import Slider from '@material-ui/core/Slider';
import { SliderContainer } from './styles';


function PriceFilterSlider({ value, handleChange, min, max }) {
  return (
    <SliderContainer>
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
      />
    </SliderContainer>
  );
}

export { PriceFilterSlider };
