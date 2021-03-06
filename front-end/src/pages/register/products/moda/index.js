import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import useRouterFunction from '../../../../infra/components/useRouter';
import { useVerifyExpiredToken } from '../../../../customHooks/index';
import axios from 'axios';
import { DropzoneArea } from 'material-ui-dropzone'
import Head from '../../../../infra/components/head';
import Header from '../../../../patterns/header';
import Footer from '../../../../patterns/footer';
import Link from '../../../../infra/components/link';
import {
  ProductDescriptionInput,
  CustomInputWithUseRef,
  CustomInputWithUseState,
  PriceInput,
  DisabledInput,
} from '../../../../components/layout/inputGroup';
import HandleSubmissionMessage from '../../../../components/handleSubmissionMessage';
import { DropDownStoreCategorySelect } from '../../../../components/layout/selectGroup';
import Grid from '@material-ui/core/Grid';
import { RegisterProductButton } from './styles';
import {
  getToken,
  formDataArray,
  formDataArrayOfObjects,
  handleUseRef,
  getReduxUserData
} from '../../../../utils/index';
import formatNumbersToBRL from '../../../../utils/formatNumbersToBRL';
import { CustomPropertyAddSizeQuantity, CustomPropertyAddString } from '../../../../components/customPropertyAdd';
import { PageContainerSection, PageContentDiv } from '../../../../components/dataGrid';

function RegisterProductPage() {
  const allUserData = getReduxUserData();
  useVerifyExpiredToken();

  const [submited, setSubmited] = useState(false);
  const [noConnectionError, setNoConnectionError] = useState(null);
  const [registerProductMessage, setRegisterProductMessage] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productSizeTableImage, setProductSizeTableImage] = useState(null);
  const [formatedPrice, setFormatedPrice] = useState('');
  const color = useRef(''); 
  const productName = useRef('');
  const brand = useRef('');
  const price = useRef(''); 
  const stockQuantity = useRef('');
  const description = useRef('');
  const storeCategory = useRef('');

  const { query: { category } } = useRouterFunction();

  const token = getToken();

  const setPriceFunction = (value) => {
    const formatedPriceString = formatNumbersToBRL(value);
    setFormatedPrice(formatedPriceString);
    return handleUseRef(price, formatedPriceString);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formDataArray(formData, productImages, "productImages");
    formData.append("productName", productName.current);
    formData.append("price", price.current);
    formData.append("stockQuantity", stockQuantity.current);
    formData.append("description", description.current);
    formData.append("brand", brand.current);
    formData.append("category", category);
    formData.append("storeCategory", storeCategory.current);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("color", color.current);
    formData.append("reviews", JSON.stringify(reviews));
    formDataArray(formData, productSizeTableImage, "productSizeTableImage");
    return formData;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    return axios
      .post(process.env.NEXT_PUBLIC_API_URL_REGISTER_PRODUCT,
        handleUpload(),
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        if (!res) return setNoConnectionError('Sem conexação.')
        console.log(res)
        setRegisterProductMessage({
          type: 'successfullProductRegister',
          messages: 'Produto Cadastrado com sucesso!',
        });
        return setSubmited(true);
      })
      .catch(({ response }) => {
        console.log(response);
        if (!response) return setNoConnectionError('Sem conexação.');
        if (response.data.err.type === 'jwtExpired') return Router.reload(window.location.pathname);
        setRegisterProductMessage({
            type: response.data.err.type,
            messages: response.data.err.details,
        });
        return setSubmited(true);
      })
  }

  return (
    <div>
      <Head title='Cadastre seu produto' />
      <Header />
      <main>
        <PageContainerSection>
          <h1>Cadastre seu produto</h1>
          <PageContentDiv>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomInputWithUseRef name="productName" id="productName" label="Nome do produto" setInput={handleUseRef} defaultValue={productName.current} fieldToUseRef={productName} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInputWithUseRef name="brand" id="brand" label="Marca" setInput={handleUseRef} defaultValue={brand.current} fieldToUseRef={brand} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInputWithUseRef name="color" id="color" label="Cores" setInput={handleUseRef} defaultValue={color.current} fieldToUseRef={color} />
              </Grid>
              {allUserData.storeData.storeCategoriesData.length === 0 ?
                <Grid item xs={12} sm={6}>
                  <Link href={process.env.NEXT_PUBLIC_PATH_STORE_PROFILE}>Cadastre Categorias para sua loja</Link>
                </Grid>
                :
                <Grid item xs={12} sm={6}>
                  <DropDownStoreCategorySelect
                    dropDownArray={allUserData.storeData.storeCategoriesData}
                    selectorName='Sua Categoria'
                    handleChange={handleUseRef}
                    fieldToUseRef={storeCategory}
                  />
                </Grid>
              }
              <Grid item xs={12} sm={6}>
                <DisabledInput value={category} label="Categoria Cayama" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PriceInput value={formatedPrice} label="Preço" setPrice={setPriceFunction} />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <CustomInputWithUseRef name="stockQuantity" id="stockQuantity" label="Quantidade" setInput={handleUseRef} defaultValue={stockQuantity.current} fieldToUseRef={stockQuantity}/>
              </Grid> */}
              <CustomPropertyAddSizeQuantity
                name="size"
                id="size"
                addButtonText="Adicionar Tamanho com quantidade"
                label="Tamanho"
                setInputsArray={setSizes}
                inputsArray={sizes}
                quantityPerSize={true}
              />
              <CustomPropertyAddString
                name="reviews"
                id="reviews"
                addButtonText="Adicionar Reviews"
                label="Link Reviews"
                setInputsArray={setReviews}
                inputsArray={reviews}
              />
              <Grid item xs={12} sm={12}>
                <span>Imagens</span>
                <DropzoneArea
                  acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                  showPreviews={false}
                  maxFileSize={5000000}
                  dropzoneText="Arraste as imagens do produto para aqui"
                  showPreviewsInDropzone={true}
                  filesLimit={8}
                  onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                  onChange={(files) => setProductImages(files)}
                  onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <span>Tabela de tamanhos</span>
                <DropzoneArea
                  acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                  showPreviews={false}
                  maxFileSize={5000000}
                  dropzoneText="Arraste a tabela de tamanhos para aqui"
                  showPreviewsInDropzone={true}
                  filesLimit={1}
                  onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                  onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                  onChange={(files) => setProductSizeTableImage(files)}
                />
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={12} sm={12}>
                  <ProductDescriptionInput setDescription={handleUseRef} defaultValue={description.current} fieldToUseRef={description} />
                </Grid>
              </Grid>
              <Grid container item spacing={2} justify="center">
                <Grid item xs={12} sm={6}>
                  <RegisterProductButton onClick={handleRegister}>Cadastrar</RegisterProductButton>
                  {submited ?
                    <HandleSubmissionMessage objectController={registerProductMessage} />
                    :
                    null
                  }
                  {noConnectionError ? noConnectionError : null}
                </Grid>
              </Grid>
            </Grid>
          </PageContentDiv>
        </PageContainerSection>
      </main>
      <Footer />
    </div>
  );
}

export default RegisterProductPage;
