import React, { useState, useEffect } from 'react';
import Router from 'next/router'
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
  CustomInput,
  PriceInput,
  DisabledInput,
} from '../../../../components/layout/inputGroup';
import HandleSubmissionMessage from '../../../../components/handleSubmissionMessage';
import { DropDownSelect } from '../../../../components/layout/selectGroup';
import Grid from '@material-ui/core/Grid';
import {
  RegisterProductSection,
  RegisterProductContent,
  RegisterProductButton,
} from './styles';
import { getToken, formDataArray } from '../../../../utils/index';
import formatNumbersToBRL from '../../../../utils/formatNumbersToBRL';
import CustomPropertyAdd from '../../../../components/customPropertyAdd';

function RegisterProductPage() {
  const [submited, setSubmited] = useState(false);
  const [noConnectionError, setNoConnectionError] = useState(null);
  const [registerProductMessage, setRegisterProductMessage] = useState(null);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productSizeTableImage, setProductSizeTableImage] = useState(null);
  const [color, setColor] = useState('');
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [formatedPrice, setFormatedPrice] = useState('');
  // const [category, setCategory] = useState([]);
  const [stockQuantity, setStockQuantity] = useState('');
  const [description, setDescription] = useState('');

  const { query: { category } } = useRouterFunction();

  useVerifyExpiredToken()
  const token = getToken();

  const getCategory = () => {
    // const pathNameSplited = history.pathname.split('/');
    // const category = pathNameSplited[pathNameSplited.length - 1];
    // console.log(category)
    return category
  }

  const setPriceFunction = (value) => {
    const formatedPriceString = formatNumbersToBRL(value)
    setFormatedPrice(formatedPriceString)
    return setPrice(formatedPriceString)
  }

  const handleUpload = () => {
    const formData = new FormData();
    formDataArray(formData, productImages, "productImages")
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("stockQuantity", stockQuantity);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("category", category);
    formDataArray(formData, sizes, "sizes[]")
    formData.append("color", color);
    formDataArray(formData, reviews, "reviews[]")
    formDataArray(formData, productSizeTableImage, "productSizeTableImage")
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
        <RegisterProductSection>
          <h1>Cadastre seu produto</h1>
          <RegisterProductContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomInput name="productName" id="productName" label="Nome do produto" setInput={setProductName} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput name="brand" id="brand" label="Marca" setInput={setBrand} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput name="color" id="color" label="Cores" setInput={setColor} />
              </Grid>
              {categoriesArray.length === 0 ?
                <Grid item xs={12} sm={6}>
                  <Link href="/register-category">Cadastre Categorias para sua loja</Link>
                </Grid>
                :
                <Grid item xs={12} sm={6}>
                  <DropDownSelect
                    dropDownArray={categoriesArray}
                    selectorName='Categoria'
                  />
                </Grid>
              }
              <Grid item xs={12} sm={6}>
                <DisabledInput value={category} label="Categoria Cayama" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PriceInput value={formatedPrice} label="Preço" setPrice={setPriceFunction} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput name="stockQuantity" id="stockQuantity" label="Quantidade" setInput={setStockQuantity} />
              </Grid>
              <CustomPropertyAdd
                name="size"
                id="size"
                addButtonText="Adicionar Tamanho"
                label="Tamanho"
                setInputsArray={setSizes}
                inputsArray={sizes}
              />
              <CustomPropertyAdd
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
                  <ProductDescriptionInput setDescription={setDescription} />
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
          </RegisterProductContent>
        </RegisterProductSection>
      </main>
      <Footer />
    </div>
  );
}

export default RegisterProductPage;
