import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  AddButton,
  InputWithX,
  SizeText,
} from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  CustomInput,
} from '../../components/layout/inputGroup';

function CustomPropertyAdd({ addButtonText, label, name, id, setInputsArray, inputsArray }) {
  const [inputName, setInputName] = useState('');

  const setInputFunction = (value) => {
    setInputName(value);
  };

  const addInput = () => {
    const newAllInputs = [...inputsArray];
    newAllInputs.push(inputName);
    setInputsArray(newAllInputs);
    setInputName('');
  }

  const removeInput = (value) => {
    const newAllInputs = inputsArray.filter((input) => input !== value);
    setInputsArray(newAllInputs);
  };

  return (
    <Grid container item spacing={2}>
      <Grid alignItems="center" container item spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomInput name={name} id={id} label={label} input={inputName} setInput={setInputFunction} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <AddButton onClick={addInput}>{addButtonText}</AddButton>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        {inputsArray.map((inputName, index) => {
          return (
            <Grid item key={index}>
              <InputWithX onClick={(e) => removeInput(e.currentTarget.textContent)}>
                <SizeText>
                  {inputName}
                </SizeText>
                <div>
                  <DeleteIcon />
                </div>
              </InputWithX>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  );
}

export default CustomPropertyAdd;
