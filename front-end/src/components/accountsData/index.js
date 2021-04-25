import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userDataAction } from '../../redux/action/userDataAction';
import DeleteIcon from '@material-ui/icons/Delete'; 
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { SketchPicker } from 'react-color';
import { PageContentDiv } from '../dataGrid';
import { CustomPropertyAddString } from '../customPropertyAdd';
import { CayamaPrimaryButton, CayamaSecondaryButton, SaveDataButton } from '../layout/buttonGroup';
import { EditButtonContainer, CardDataContainer, CardDataContent } from './styles';
import { CustomInputWithUseRef, CustomInputWithUseState } from '../layout/inputGroup';
import { ImagesDropzoneArea } from '../imagesDropzoneArea';
import { handleUseRef, getToken, returnArrayOfObjects, formDataArray } from '../../utils/index';
import { AddAddressForm } from '../address';
import { AddCreditCardForm } from '../creditCard';
import { InfluencerPrimarySocialMedia, InfluencerContentType } from '../influencerInput';
// import Image from '../../infra/components/image';

const EditableAccountData = ({ email }) => {
  const [disabled, setDisabled] = useState(true);
  const inputEmail = useRef(email);
  const token = getToken();
  
  const submitUserData = () => {
      // Nao pode alterar email por aqui, apenas ve-lo. A Alteracao de email e senha deve ser feita por outro meio.
      // return axios.put(`${process.env.NEXT_PUBLIC_API_URL_USER_UPDATE_BY_FIELD}`, 
      //   {
      //     fieldToUpdate: 'accountData',
      //     newValue: { email: inputEmail.current },
      //   },
      //   {
      //     headers: { authorization: token }
      //   }
      // )
      // .then(response => {
      //   console.log(response);
      // })
      // .catch(err => {
      //   console.log(err);
      // })
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
  const dispatch = useDispatch();
  const token = getToken();
  
  const submitPeronalData = () => {
    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_USER_UPDATE_BY_FIELD}`, 
        {
          fieldToUpdate: 'personalData',
          newValue: {
            firstName: inputFirstName.current,
            lastName: inputLastName.current,
            cpf: inputCpf.current,
            phone: inputPhone.current,
          },
        },
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(userDataAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
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

  const dispatch = useDispatch();
  const token = getToken();
  
  const submitStoreData = () => {
    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_UPDATE_STORE_DATA_FIELD}`,
        {
          fieldToUpdate: 'storePersonalData',
          newValue: {
            storeName: inputStoreName.current,
            cnpj: inputCnpj.current,
            phone: inputPhone.current,
          },
        },
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(userDataAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
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

  const dispatch = useDispatch();
  const token = getToken();

  const submitInfluencerData = () => {
    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_USER_UPDATE_BY_FIELD}`, 
        {
          fieldToUpdate: 'influencer',
          newValue: {
            socialMedia: inputSocialMedia.current,
            influencerLink: inputLink.current,
            contentType: inputContentType.current,
            socialMediaName: inputSocialMediaName.current,
          },
        },
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(userDataAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
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
          <SaveDataButton disabled={disabled} onClick={submitInfluencerData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableCardsData = ({ cardsInfo = [] }) => {
  const [disabled, setDisabled] = useState(true);
  const [addCard, setAddCard] = useState(false);
  
  const dispatch = useDispatch();
  const token = getToken();

  const updateCardData = (newCards) => {
    const arrayOfObjects = returnArrayOfObjects(cardsInfo, newCards)

    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_USER_UPDATE_BY_FIELD}`, 
      {
        fieldToUpdate: 'cardData',
        newValue: arrayOfObjects,
      },
      {
        headers: { authorization: token }
      }
    )
      .then((res) => {
        console.log(res);
        dispatch(userDataAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const deleteCard = (cardToDeleteInfo) => {
    console.log(cardToDeleteInfo)
    const newCardsArray = [...cardsInfo].filter((card) => card.cardNumber !== cardToDeleteInfo.cardNumber);
    console.log(newCardsArray)
    updateCardData(newCardsArray);
  }

  const addCardData = (cardsObj) => {
    updateCardData(cardsObj);
    return setAddCard(false);
  }

  return (
    <div>
      <h5>Cartões</h5>
      <PageContentDiv width="50vw">
        <div>
          {cardsInfo.map((card, index) => {
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
        {addCard ? <AddCreditCardForm addCardData={addCardData} setAddCard={setAddCard} /> : null}
      </PageContentDiv>
    </div>
  );
}

const EditableShippingData = ({ addresses }) => {
  const [disabled, setDisabled] = useState(true);
  const [addAddress, setAddAddress] = useState(false);

  const dispatch = useDispatch();
  const token = getToken();

  const updateAddressData = (newAdresses) => {
    const arrayOfObjects = returnArrayOfObjects(addresses, newAdresses)

    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_USER_UPDATE_BY_FIELD}`, 
      {
        fieldToUpdate: 'addresses',
        newValue: arrayOfObjects,
      },
      {
        headers: { authorization: token }
      }
    )
      .then((res) => {
        console.log(res);
        dispatch(userDataAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const deleteAddress = (addressToDeleteInfo) => {
    const newAddressArray = [...addresses].filter((address) => 
      `${address.address} ${address.number} ${address.complement}` !== addressToDeleteInfo);
    updateAddressData(newAddressArray);
  }

  const addAddressData = (addressObj) => {
    updateAddressData(addressObj);
    return setAddAddress(false);
  }

  return ( 
   <div>
      <h5>Endereços</h5>
      <PageContentDiv width="50vw">
        <div>
          {addresses.map((address, index) => {
            return(
              <CardDataContainer key={index}>
                <CardDataContent>
                  <h5>{address.address} {address.number}</h5>
                  <span>{address.recipient}</span>
                  <span>{address.complement}</span>
                  <span>{address.city}</span>
                </CardDataContent>
                <DeleteIcon onClick={() => deleteAddress(`${address.address} ${address.number} ${address.complement}`)} />
              </CardDataContainer>
            )
          })}
        </div>
        <EditButtonContainer>
          <CayamaPrimaryButton onClick={() => setAddAddress(true)}>
            Adicionar
          </CayamaPrimaryButton>
        </EditButtonContainer>
        {addAddress ? <AddAddressForm addAddressData={addAddressData} setAddAddress={setAddAddress} /> : null}
      </PageContentDiv>
    </div>
  )
}

const EditableCarroselData = ({ initialFiles }) => {
  const [disabled, setDisabled] = useState(true);
  const [carrosselImages, setCarrosselImages] = useState([]);
  const [noConnectionError, setNoConnectionError] = useState(null);
  const dispatch = useDispatch();
  const token = getToken();

  const handleUpload = () => {
    const formData = new FormData();
    formDataArray(formData, carrosselImages, "carrosselImages");
    return formData;
  }

  const handleCarrosselData = (e) => {
    e.preventDefault();
    return axios
      .put(process.env.NEXT_PUBLIC_API_URL_UPDATE_STORE_CARROSSEL_IMG,
        handleUpload(),
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        if (!res) return setNoConnectionError('Sem conexação.')
        console.log(res)
        dispatch(userDataAction(res.data));
      })
      .catch(({ response }) => {
        console.log(response);
        if (!response) return setNoConnectionError('Sem conexação.');
      })
  }
  return (
    <div>
      <h5>Imagens Carrossel</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <ImagesDropzoneArea setImages={setCarrosselImages} initialFiles={initialFiles} />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={handleCarrosselData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableStoreColorsData = ({ primaryColorDB, secondaryColorDB }) => {
  const token = getToken();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [primaryColor, setPrimaryColor] = useState(primaryColorDB);
  const [secondaryColor, setSecondaryColor] = useState(secondaryColorDB);
  
  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color.hex);
  };

  const handleSecondaryColorChange = (color) => {
    setSecondaryColor(color.hex);
  };

  const submitStoreColorsData = () => {
    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_UPDATE_STORE_DATA_FIELD}`,
        {
          fieldToUpdate: 'storeColorsData',
          newValue: {
            primaryColor,
            secondaryColor,
          },
        },
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(userDataAction(res.data));
        setDisabled(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <h5>Cores da Loja</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseState
              name="primaryStoreColor"
              id="primaryStoreColor"
              disabled={true}
              label="Cor primaria"
              input={primaryColor}
            />
          </Grid>
          {!disabled ?
            <Grid item xs={12} sm={12}>
              <SketchPicker 
                color={primaryColor}
                onChange={handlePrimaryColorChange}
              />
            </Grid>
            :
            null
          }
          <Grid item xs={12} sm={6}>
            <CustomInputWithUseState
              name="secondaryStoreColor"
              id="secondaryStoreColor"
              disabled={true}
              label="Cor secundaria"
              input={secondaryColor}
            />
          </Grid>
          {!disabled ?
            <Grid item xs={12} sm={12}>
              <SketchPicker 
                color={secondaryColor}
                onChange={handleSecondaryColorChange}
              />
            </Grid>
            :
            null
          }
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={submitStoreColorsData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>  
    </div>
  );
}

const EditableLogoData = ({ initialFiles }) => {
  const [disabled, setDisabled] = useState(true);
  const [logoImage, setLogoImage] = useState([]);
  const [noConnectionError, setNoConnectionError] = useState(null);
  const dispatch = useDispatch();
  const token = getToken();

  const handleUpload = () => {
    const formData = new FormData();
    formDataArray(formData, logoImage, "logoImage");
    return formData;
  }

  const handleLogoData = (e) => {
    e.preventDefault();
    return axios
      .put(process.env.NEXT_PUBLIC_API_URL_UPDATE_STORE_LOGO_IMG,
        handleUpload(),
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        if (!res) return setNoConnectionError('Sem conexação.')
        console.log(res)
        dispatch(userDataAction(res.data));
      })
      .catch(({ response }) => {
        console.log(response);
        if (!response) return setNoConnectionError('Sem conexação.');
      })
  }
  return (
    <div>
      <h5>Logo da Loja</h5>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <ImagesDropzoneArea setImages={setLogoImage} initialFiles={initialFiles} />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={handleLogoData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

const EditableStoreCategories = ({ categoriesDB = [] }) => {
  const [categories, setCategories] = useState(categoriesDB);
  const [disabled, setDisabled] = useState(true);
  const [noConnectionError, setNoConnectionError] = useState(null);

  console.log(categories)
  const dispatch = useDispatch();
  const token = getToken();

  const handleStoreCategoriesData = () => {
    return axios.put(`${process.env.NEXT_PUBLIC_API_URL_UPDATE_STORE_DATA_FIELD}`,
    {
      fieldToUpdate: 'storeCategoriesData',
      newValue: categories,
    },
    {
      headers: { authorization: token }
    }
  )
  .then((res) => {
    if (!res) return setNoConnectionError('Sem conexação.');
    console.log(res);
    dispatch(userDataAction(res.data));
    setDisabled(true);
  })
  .catch((err) => {
    console.log(err);
  })
}

  return (
    <div>
      <PageContentDiv width="50vw">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <CustomPropertyAddString
              name="categories"
              id="categories"
              addButtonText="Adicionar Categorias"
              label="Categorias"
              setInputsArray={setCategories}
              inputsArray={categories}
              disabled={disabled}
            />
          </Grid>
        </Grid>
        <EditButtonContainer>
          <SaveDataButton disabled={disabled} onClick={handleStoreCategoriesData} />
          <CayamaPrimaryButton onClick={(() => setDisabled(!disabled))}>
            Editar
          </CayamaPrimaryButton>
        </EditButtonContainer>
      </PageContentDiv>
    </div>
  );
}

export {
  EditableAccountData,
  EditableUserPersonalData,
  EditableStoreData,
  EditableInfluencerData,
  EditableShippingData,
  EditableCardsData,
  EditableCarroselData,
  EditableStoreColorsData,
  EditableLogoData,
  EditableStoreCategories,
};
