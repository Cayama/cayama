import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { PageContentDiv } from '../dataGrid';
import { CayamaPrimaryButton, CayamaSecondaryButton, SaveDataButton } from '../layout/buttonGroup';
import { EditButtonContainer, CardDataContainer, CardDataContent } from './styles';
import { CustomInput } from '../layout/inputGroup';
// import Image from '../../infra/components/image';
import cardsMock from '../../../dataMock/cardsMock';
import addressesMock from '../../../dataMock/addressesMock';

const EditableUserData = ({ email }) => {
  const [disabled, setDisabled] = useState(true);
  const [inputEmail, setInputEmail] = useState(email);
  
  const submitUserData = () => {

  };
  // <Grid item xs={12} sm={6}>
  return (
    <div>
      <h5>Dados da conta</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInput name="email" id="email" setInput={setInputEmail} input={inputEmail} label="Email" disabled={disabled} />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={submitUserData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableUserPersonalData = ({ phone, firstName, lastName, cpf }) => {
  const [disabled, setDisabled] = useState(true);
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);
  const [inputCpf, setInputCpf] = useState(cpf);
  const [inputPhone, setInputPhone] = useState(phone);
  
  const submitPeronalData = () => {

  };

  return (
    <div>
      <h5>Dados Pessoais</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInput name="firstName" id="firstName" setInput={setInputFirstName} input={inputFirstName} label="Nome" disabled={disabled} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput name="lastName" id="lastName" setInput={setInputLastName} input={inputLastName} label="Sobrenome" disabled={disabled} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput name="cpf" id="cpf" setInput={setInputCpf} input={inputCpf} label="CPF" disabled={disabled} />
          </Grid>
          <Grid item xs={12} sm={6}>  
            <CustomInput name="phone" id="phone" setInput={setInputPhone} input={inputPhone} label="Telefone" disabled={disabled} />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={submitPeronalData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableStoreData = ({ phone, storeName, cnpj }) => {
  const [disabled, setDisabled] = useState(true);
  const [inputStoreName, setInputStoreName] = useState(storeName);
  const [inputCnpj, setInputCnpj] = useState(cnpj);
  const [inputPhone, setInputPhone] = useState(phone);
  
  const submitStoreData = () => {

  };

  return (
    <div>
      <h5>Dados Loja</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInput name="storeName" id="storeName" setInput={setInputStoreName} input={inputStoreName} label="Nome da Loja" disabled={disabled} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput name="cnpj" id="cnpj" setInput={setInputCnpj} input={inputCnpj} label="CNPJ" disabled={disabled} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput name="phone" id="phone" setInput={setInputPhone} input={inputPhone} label="Telefone" disabled={disabled} />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={submitStoreData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableInfluencerData = ({ link }) => {
  const [disabled, setDisabled] = useState(true);
  const [inputLink, setInputLink] = useState(link);
  
  const submitStoreData = () => {

  };

  return (
    <div>
      <h5>Dados Influencer</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInput name="link" id="link" setInput={setInputLink} input={inputLink} label="Link Divulgação" disabled={disabled} />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={submitStoreData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableCardsData = (cardsInfo) => {
  const [disabled, setDisabled] = useState(true);

  const [cards, setCards] = useState(cardsMock);
  

  const deleteCard = (cardInfo) => {
    const newCardsArray = cards.filter((card) => card.cardNumber !== cardInfo.cardNumber);
    // fazer chamada api para salvar novo cartao;
    setCards(newCardsArray);
  }

  return (
    <div>
      <h5>Cartões</h5>
      <PageContentDiv width="50vw">
        <div>
          {cards.map((card) => {
            return(
              <CardDataContainer>
                {/* <Image src="C:\Users\jafet.h.fagundes\cayama\front-end\dataMock\Mastercard-logo.jpg" width="100%" height="50%" /> */}
                <CardDataContent>
                  <span>Terminado em {card.cardNumber}</span>
                  <span>Bandeira: {card.flagCard}</span>
                  <span>Vencimento: {card.expireDate}</span>
                </CardDataContent>
                <CayamaSecondaryButton onClick={() => deleteCard(card)}>
                  Excluir
                </CayamaSecondaryButton>
              </CardDataContainer>
            )
          })}
        </div>
        <EditButtonContainer>
          <CayamaPrimaryButton>
            Adicionar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableShippingData = () => {
  const [disabled, setDisabled] = useState(true);
  const [addresses, setAddresses] = useState(addressesMock);

  return ( 
   <div>
      <h5>Endereços</h5>
      <PageContentDiv width="50vw">
      <div>
          {addresses.map((address) => {
            return(
              <CardDataContainer>
                {/* <Image src="C:\Users\jafet.h.fagundes\cayama\front-end\dataMock\Mastercard-logo.jpg" width="100%" height="50%" /> */}
                <CardDataContent>
                  <h5>{address.address}</h5>
                  <span>{address.recipient}</span>
                  <span>{address.complement}</span>
                  <span>{address.city}</span>
                </CardDataContent>
                {/* <CayamaSecondaryButton onClick={() => deleteCard(card)}>
                  Excluir
                </CayamaSecondaryButton> */}
              </CardDataContainer>
            )
          })}
        </div>
        <EditButtonContainer>
          <CayamaPrimaryButton>
            Adicionar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  )
}

export {
  EditableShippingData,
  EditableCardsData,
  EditableUserPersonalData,
  EditableUserData,
  EditableStoreData,
  EditableInfluencerData,
};
