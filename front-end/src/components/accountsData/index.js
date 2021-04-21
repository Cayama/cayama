import React, { useState, useRef } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { PageContentDiv } from '../dataGrid';
import { CayamaPrimaryButton, CayamaSecondaryButton, SaveDataButton } from '../layout/buttonGroup';
import { EditButtonContainer, CardDataContainer, CardDataContent } from './styles';
import { CustomInputWithUseRef } from '../layout/inputGroup';
import { handleUseRef } from '../../utils/index';
import { AddAddressForm } from '../address';
import { AddCreditCardForm } from '../creditCard';
import { InfluencerPrimarySocialMedia, InfluencerContentType } from '../influencerInput';
// import Image from '../../infra/components/image';

const EditableUserData = ({ email }) => {
  const [disabled, setDisabled] = useState(true);
  const inputEmail = useRef(email);
  
  const submitUserData = () => {
      
  };

  return (
    <div>
      <h5>Dados da conta</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="email"
              id="email"
              setInput={handleUseRef}
              fieldToUseRef={inputEmail}
              defaultValue={inputEmail.current}
              label="Email"
              disabled={disabled}
            />
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
  const inputFirstName = useRef(firstName);
  const inputLastName = useRef(lastName);
  const inputCpf = useRef(cpf);
  const inputPhone = useRef(phone);
  
  const submitPeronalData = () => {

  };

  return (
    <div>
      <h5>Dados Pessoais</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="firstName"
              id="firstName"
              setInput={handleUseRef}
              defaultValue={inputFirstName.current}
              label="Nome"
              disabled={disabled}
              fieldToUseRef={inputFirstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="lastName"
              id="lastName"
              setInput={handleUseRef}
              defaultValue={inputLastName.current}
              fieldToUseRef={inputLastName}
              label="Sobrenome"
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="cpf" id="cpf"
              setInput={handleUseRef}
              defaultValue={inputCpf.current}
              fieldToUseRef={inputCpf}
              label="CPF"
              disabled={disabled}
              fieldToUseRef={inputLastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>  
            <CustomInputWithUseRef
              name="phone"
              id="phone"
              setInput={handleUseRef}
              defaultValue={inputPhone.current}
              fieldToUseRef={inputPhone}
              label="Telefone"
              disabled={disabled}
            />
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
  const inputStoreName = useRef(storeName);
  const inputCnpj = useRef(cnpj);
  const inputPhone = useRef(phone);
  
  const submitStoreData = () => {

  };

  return (
    <div>
      <h5>Dados Loja</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="storeName"
              id="storeName"
              setInput={handleUseRef}
              defaultValue={inputStoreName.current}
              fieldToUseRef={inputStoreName}
              label="Nome da Loja"
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="cnpj"
              id="cnpj"
              setInput={handleUseRef}
              defaultValue={inputCnpj.current}
              fieldToUseRef={inputCnpj}
              label="CNPJ"
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="phone"
              id="phone"
              setInput={handleUseRef}
              defaultValue={inputPhone.current}
              fieldToUseRef={inputPhone}
              label="Telefone"
              disabled={disabled}
            />
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

const EditableInfluencerData = ({ influencerLink, socialMedia, contentType, socialMediaName }) => {
  const [disabled, setDisabled] = useState(true);
  const inputLink = useRef(influencerLink);
  const inputSocialMedia = useRef(socialMedia);
  const inputContentType = useRef(contentType);
  const inputSocialMediaName = useRef(socialMediaName);

  const submitStoreData = () => {
    
  };

  return (
    <div>
      <h5>Dados Influencer</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="link"
              id="link"
              setInput={handleUseRef}
              defaultValue={inputLink.current}
              fieldToUseRef={inputLink}
              label="Link Divulgação"
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfluencerPrimarySocialMedia disabled={disabled} fieldToUseRef={inputSocialMedia} defaultValue={inputSocialMedia.current} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseRef
              name="socialMediaName"
              id="socialMediaName"
              setInput={handleUseRef}
              defaultValue={inputSocialMediaName.current}
              fieldToUseRef={inputSocialMediaName}
              label="Nome"
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfluencerContentType disabled={disabled} fieldToUseRef={inputContentType} defaultValue={inputContentType.current} />
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

const EditableCardsData = ({ cardsInfo }) => {
  const [disabled, setDisabled] = useState(true);
  const [addCard, setAddCard] = useState(false);

  const [cardsArray, setCardsArray] = useState(cardsInfo);
  
  const handleSaveCreditCard = (cardNumber, cardFlag, expireDate, nameOnCard, cpfOwner, secureCode) => {
    // fazer chamada api para salvar novo cartao;
    setAddCard(false);
  }

  const deleteCard = (cardInfo) => {
    const newCardsArray = cards.filter((card) => card.cardNumber !== cardInfo.cardNumber);
    // fazer chamada api para salvar novo cartao;
    setCardsArray(newCardsArray);
  }

  return (
    <div>
      <h5>Cartões</h5>
      <PageContentDiv width="50vw">
        <div>
          {cardsArray.map((card, index) => {
            return(
              <CardDataContainer key={index}>
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
          <CayamaPrimaryButton onClick={() => setAddCard(true)}>
            Adicionar
          </CayamaPrimaryButton>
        </EditButtonContainer>
        {addCard ? <AddCreditCardForm handleSaveCreditCard={handleSaveCreditCard} setAddCard={setAddCard} /> : null}
      </PageContentDiv>
    </div>
  );
}

const EditableShippingData = ({ addresses }) => {
  const [disabled, setDisabled] = useState(true);
  const [addressesArray, setAddressesArray] = useState(addresses);
  const [addAddress, setAddAddress] = useState(false);

  const handleSaveAddress = (address, city, state, neighborhood, country, cep, complement, number) => {
    // add logica de envio dos dados para api.
    setAddAddress(!addAddress)
  }

  return ( 
   <div>
      <h5>Endereços</h5>
      <PageContentDiv width="50vw">
        <div>
          {addressesArray.map((address, index) => {
            return(
              <CardDataContainer key={index}>
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
          <CayamaPrimaryButton onClick={() => setAddAddress(true)}>
            Adicionar
          </CayamaPrimaryButton>
        </EditButtonContainer>
        {addAddress ? <AddAddressForm handleSaveAddress={handleSaveAddress} setAddAddress={setAddAddress} /> : null}
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
