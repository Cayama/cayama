import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {
  NestedListContainer,
  SubStructureText,
} from './styles';
import { ListItemContent } from '../layout/listGroup';
import { PriceFilterButton } from '../layout/buttonGroup';
import { PriceRange } from '../priceRange';
import { PriceFilterSlider } from '../slider';

const PriceSubStructureItems = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <PriceRange rangeOne={value[0]} rangeTwo={value[1]} />
      <ListItemContent key={name}>
        <PriceFilterSlider
          value={value}
          handleChange={handleChange}
          min={0}
          max={1000}
        />
        <PriceFilterButton />
      </ListItemContent>
    </div>
  );
};

const SubStructureItems = ({ subStructure }) => {
  return (
    <div>
      {subStructure.map(({ name }) => {
          return (
            <ListItemContent key={name}>
              <SubStructureText>{name}</SubStructureText>
            </ListItemContent>
          )
        })}
    </div>
  );
};

const NestedItem = ({ name, subStructure }) => {
  const [open, setOpen] = useState(false);
  // console.log(structure)

  const handleClick = () => {
    setOpen(!open);
  };

  const componentToRender = (open, name, subStructure) => {
    if (open && name === 'Preço') {
      return (
        <PriceSubStructureItems />
      );
    }

    else if (open) {
      return (
        <SubStructureItems subStructure={subStructure} />
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <ListItemContent key={name} onClick={handleClick}>
        {name} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemContent>
      {componentToRender(open, name, subStructure)}
    </div>
  );
};

function NestedList({ title, structure }) {
  return (
    <NestedListContainer>
      <div>
        <Divider />
        {structure.map(({ name, subStructure }) => {
          if (Array.isArray(subStructure)) {
            return (
              <NestedItem key={name} name={name} subStructure={subStructure} />
            )
          }
          return (
            <ListItemContent key={name}>
              {name}
            </ListItemContent>
          )
        })}
        {title === 'Filtrar' ? <NestedItem name="Preço" /> : null}
      </div>
    </NestedListContainer>
  );
};

export default NestedList;
