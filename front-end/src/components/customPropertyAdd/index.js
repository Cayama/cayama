import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  AddButton,
  InputWithX,
  SizeText,
} from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { CustomInputWithUseState } from '../../components/layout/inputGroup';


function CustomPropertyAddSizeQuantity ({ addButtonText, label, name, id, setInputsArray, inputsArray, disabled = false, quantityPerSize = false }) {
  const [inputName, setInputName] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  const setInputFunction = (value) => {
    setInputName(value);
  };

  const addInput = () => {
    const newAllInputs = [...inputsArray];
    newAllInputs.push({ size: inputName, stockQuantity });
    setInputsArray(newAllInputs);
    setInputName('');
    setStockQuantity('');
  }

  const removeInput = (size) => {
    if (disabled) return;
    const newAllInputs = inputsArray.filter((input) => input.size !== size);
    setInputsArray(newAllInputs);
  };

  return (
    <Grid container item spacing={2}>
      <Grid alignItems="center" container item spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomInputWithUseState
            name={name}
            id={id}
            label={label}
            input={inputName}
            disabled={disabled}
            setInput={setInputFunction}
          />
        </Grid>
        {quantityPerSize ?
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseState
              name="stockQuantity"
              id="stockQuantity"
              label="Quantidade"
              input={stockQuantity}
              disabled={disabled}
              setInput={setStockQuantity}
            />
          </Grid>
          :
          null
        }
        <Grid item xs={12} sm={6}>
          <AddButton disabled={disabled} onClick={addInput}>{addButtonText}</AddButton>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        {inputsArray.map(({ size, stockQuantity }, index) => {
          return (
            <Grid item key={index}>
              <InputWithX onClick={() => removeInput(size)}>
                <SizeText>
                  {size} : {stockQuantity}
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

const CustomItensWithDeleteIcon = ({ arrayOfStrings, setRemoveItem }) => {
  return (
    <Grid container item>
      {arrayOfStrings.map((inputName, index) => {
        return (
          <Grid item key={index}>
            <InputWithX onClick={() => setRemoveItem(inputName)}>
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
  );
}

function CustomPropertyAddString ({ addButtonText, label, name, id, setInputsArray, inputsArray, disabled = false }) {
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

  const removeInput = (inputCurrentValue) => {
    if (disabled) return;
    console.log(inputCurrentValue)
    const newAllInputs = inputsArray.filter((input) => input !== inputCurrentValue);
    setInputsArray(newAllInputs);
  };

  return (
    <Grid container item spacing={2}>
      <Grid alignItems="center" container item spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomInputWithUseState
            name={name}
            id={id}
            label={label}
            input={inputName}
            disabled={disabled}
            setInput={setInputFunction}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddButton disabled={disabled} onClick={addInput}>{addButtonText}</AddButton>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        {inputsArray.map((inputName, index) => {
          return (
            <Grid item key={index}>
              <InputWithX onClick={() => removeInput(inputName)}>
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

export {
  CustomPropertyAddSizeQuantity,
  CustomPropertyAddString,
  CustomItensWithDeleteIcon,
};
