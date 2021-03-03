import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { NestedListContainer, SubStructureText } from './styles';
import { ListItemContent } from '../layout/listGroup'

const SubStructureItems = ({ subStructure }) => {
  return (
    <div>
      {subStructure.map(({ name, onClick }) => {
          return (
            <ListItemContent key={name}>
              <SubStructureText>{name}</SubStructureText>
            </ListItemContent>
          )
        })}
    </div>
  )
}

const NestedItem = ({ name, subStructure }) => {
  const [open, setOpen] = useState(false);
  // console.log(structure)

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemContent key={name} onClick={handleClick}>
        {name} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemContent>
      {open ? <SubStructureItems subStructure={subStructure} /> : null}
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
              <NestedItem name={name} subStructure={subStructure} />
            )
          }
          return (
            <ListItemContent key={name}>
              {name}
            </ListItemContent>
          )
        })}
      </div>
    </NestedListContainer>
  );
}

export default NestedList;
