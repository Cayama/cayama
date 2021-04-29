import React, { useState, useRef } from 'react';
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

const PriceSubStructureItems = ({ onClick }) => {
  const [value, setValue] = useState([20, 37]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePriceRangeChange = () => {
    return onClick({
      filter: 'priceRange',
      value: {
        first: parseFloat(value[0]),
        second: parseFloat(value[1]),
      }
    })
  }

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
        <PriceFilterButton onClick={handlePriceRangeChange} />
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

function NestedOrderList({ setFiltersAndOrderArray, filtersAndOrderArray }) {
  return (
    <NestedListContainer>
      <div>
        <Divider />
        <ListItemContent>
          Mais relevante
        </ListItemContent>
        <ListItemContent>
          Menor preço
        </ListItemContent>
        <ListItemContent>
          Maior preço
        </ListItemContent>
      </div>
    </NestedListContainer>
  );
};

const NestedFilterList = ({ setFiltersAndOrderArray, filtersAndOrderArray }) => {
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [priceRangeOpen, setPriceRangeOpen] = useState(false);

  const handleFilterAndOrder = (objectToAdd) => {
    const newFiltersAndOrderArray = filtersAndOrderArray.filter((element) => element.filter !== objectToAdd.filter) || [];
    newFiltersAndOrderArray.push(objectToAdd)
    return setFiltersAndOrderArray(newFiltersAndOrderArray);
  }

  return (
    <NestedListContainer>
      <div>
        <Divider />
        <ListItemContent onClick={() => setShippingOpen(!shippingOpen)}>
          Frete {shippingOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemContent>
        {shippingOpen ?
          <ListItemContent onClick={() => handleFilterAndOrder({ filter: 'shipping', value: true, description: 'Frete grátis' })}>
            <SubStructureText>Grátis</SubStructureText>
          </ListItemContent>
          :
          null
        }

        <Divider />
        <ListItemContent onClick={() => setPaymentOpen(!paymentOpen)}>
          Pagamento {paymentOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemContent>
        {paymentOpen ?
          <ListItemContent onClick={() => handleFilterAndOrder({ filter: 'payment', value: false, description: 'Sem juros' })}>
            <SubStructureText>Sem juros</SubStructureText>
          </ListItemContent>
          :
          null
        }

        <Divider />
        <ListItemContent onClick={() => setConditionOpen(!conditionOpen)}>
          Condição {conditionOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemContent>
        {conditionOpen ?
          <div>
            <ListItemContent onClick={() => handleFilterAndOrder({ filter: 'condition', value: true, description: 'Novo' })}>
              <SubStructureText>Novo</SubStructureText>
            </ListItemContent>
            <ListItemContent onClick={() => handleFilterAndOrder({ filter: 'condition', value: false, description: 'Usado' })}>
              <SubStructureText>Usado</SubStructureText>
            </ListItemContent>
          </div>
          :
          null
        }

        <Divider />
        <ListItemContent onClick={() => setPriceRangeOpen(!priceRangeOpen)}>
          Preço {priceRangeOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemContent>
        {priceRangeOpen ?
          <PriceSubStructureItems onClick={handleFilterAndOrder} />
          :
          null
        }
      </div>
    </NestedListContainer>
  );
}

export { NestedList, NestedOrderList, NestedFilterList };
