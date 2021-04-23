import React, { useState, useRef } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import { handleUseRef } from '../../utils/index';
import { PageContentDivFullMobileScreen, PageCenteredOnScreen, EditDataHeader } from '../dataGrid';
import { CayamaPrimaryButton } from '../layout/buttonGroup';

const AddCreditCardForm = ({ addCardData, setAddCard }) => {
  
  const cardNumber = useRef('');
  const cardFlag = useRef('');
  const expireDate = useRef('');
  const nameOnCard = useRef('');
  const cpfOwner = useRef('');
  const secureCode = useRef('');
  
  return (
    <PageCenteredOnScreen>
      <PageContentDivFullMobileScreen width="70vw">
        <EditDataHeader>
          <h4>Adicione um Cartão</h4>
          <CloseIcon onClick={() => setAddCard(false)} />
        </EditDataHeader>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Número do cartão"
              fullWidth
              onChange={(e) => handleUseRef(cardNumber, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nameOnCard"
              name="nameOnCard"
              label="Nome completo"
              fullWidth
              onChange={(e) => handleUseRef(nameOnCard, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cpfOwner"
              name="cpfOwner"
              label="CPF"
              fullWidth
              onChange={(e) => handleUseRef(cpfOwner, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="expireDate"
              name="expireDate"
              label="Data de vencimento"
              fullWidth
              onChange={(e) => handleUseRef(expireDate, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="secureCode"
              name="secureCode"
              label="Código de Segurança"
              fullWidth
              onChange={(e) => handleUseRef(secureCode, e.target.value)}
            />
          </Grid>
        </Grid>
        <CayamaPrimaryButton 
          onClick={() => addCardData({
            cardNumber: cardNumber.current,
            cardFlag: cardFlag.current,
            expireDate: expireDate.current,
            nameOnCard: nameOnCard.current,
            cpfOwner: cpfOwner.current,
            secureCode: secureCode.current
          })}
        >
          Salvar Cartão
        </CayamaPrimaryButton>
      </PageContentDivFullMobileScreen>
    </PageCenteredOnScreen>
  )
}

export {
  AddCreditCardForm
}