import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { PageContentDiv } from '../dataGrid';
import { CayamaPrimaryButton, CayamaSecondaryButton, SaveDataButton } from '../layout/buttonGroup';
import { EditButtonContainer, CardDataContainer, CardDataContent } from './styles';
import { CustomInputWithUseRef } from '../layout/inputGroup';
import { handleUseRef } from '../../utils/index';
// import Image from '../../infra/components/image';
import cardsMock from '../../../dataMock/cardsMock';
import addressesMock from '../../../dataMock/addressesMock';

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

const EditableInfluencerData = ({ link }) => {
  const [disabled, setDisabled] = useState(true);
  const inputLink = useRef(link);
  
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
          {cards.map((card, index) => {
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
          {addresses.map((address, index) => {
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
