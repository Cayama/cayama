import React, { useState, useRef } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import { handleUseRef } from '../../utils/index';
import { PageContentDivFullMobileScreen, PageCenteredOnScreen, EditDataHeader } from '../dataGrid';
import { CayamaPrimaryButton, CayamaSecondaryButton } from '../layout/buttonGroup';

const AddAddressForm = ({ addAddressData, setAddAddress }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  
  const country = useRef('');
  const cep = useRef('');
  const complement = useRef('');
  const number = useRef('');
  const recipient = useRef('');
  const phone = useRef('');

  const getAddressByApi = () => {
    axios.get(`https://viacep.com.br/ws/${cep.current}/json/`)
      .then((response) => {
        const { data: { uf, bairro, localidade, logradouro } } = response;
        setState(uf);
        setCity(localidade);
        setAddress(logradouro);
        setNeighborhood(bairro);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <PageCenteredOnScreen>
      <PageContentDivFullMobileScreen width="70vw">
        <EditDataHeader>
          <h4>Adicione um endereço</h4>
          <CloseIcon onClick={() => setAddAddress(false)} />
        </EditDataHeader>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="CEP"
              fullWidth
              onChange={(e) => handleUseRef(cep, e.target.value)}
              autoComplete="shipping postal-code"
            />
          </Grid>
          <CayamaSecondaryButton onClick={getAddressByApi}>Buscar</CayamaSecondaryButton>
          <Grid item xs={12} sm={6}>
            <TextField
              id="recipient"
              name="recipient"
              label="Nome Completo"
              fullWidth
              required
              onChange={(e) => handleUseRef(recipient, e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Telefone"
              fullWidth
              onChange={(e) => handleUseRef(phone, e.target.value)}
              autoComplete="phone"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Endereço"
              fullWidth
              value={address}
              disabled={true}
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="number"
              name="number"
              label="Numero"
              fullWidth
              onChange={(e) => handleUseRef(number, e.target.value)}
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address2"
              name="address2"
              label="Complemento"
              fullWidth
              onChange={(e) => handleUseRef(complement, e.target.value)}
              autoComplete="complement"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Cidade"
              fullWidth
              value={city}
              disabled={true}
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="neighborhood"
              name="neighborhood"
              label="Bairro"
              value={neighborhood}
              disabled={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="Estado"
              value={state}
              disabled={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              name="country"
              label="País"
              onChange={(e) => handleUseRef(country, e.target.value)}
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
        </Grid>
        <CayamaPrimaryButton 
          onClick={() => addAddressData({
            address,
            city,
            state,
            neighborhood,
            country: country.current,
            cep: cep.current,
            complement: complement.current,
            number: number.current,
            recipient: recipient.current,
            phone: phone.current,
          })}
        >
          Salvar Endereço
        </CayamaPrimaryButton>
      </PageContentDivFullMobileScreen>
    </PageCenteredOnScreen>
  )
}

export {
  AddAddressForm
}