import React, { useState } from 'react';
import axios from 'axios';
import { DropzoneArea } from 'material-ui-dropzone'
import Head from '../../../infra/components/head';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';
import Link from '../../../infra/components/link';
import {
  ProductNameInput,
  ProductColorInput,
  ProductBrandInput,
  ProductDescriptionInput,
  ProductSizeInput,
} from '../../../components/layout/inputGroup';
import { DropDownSelect } from '../../../components/layout/selectGroup';
import Grid from '@material-ui/core/Grid';
import {
  RegisterProductSection,
  RegisterProductContent,
  AddSizeButton,
  InputWithX,
  SizeText,
  RegisterProductButton,
} from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import getToken from '../../../utils/getToken';

function RegisterProductPage() {
  const [registerProductError, setRegisterProductError] = useState(null);
  const [registerProductSuccessMessage, setRegisterProductSuccessfulMessage] = useState(null);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [size, setSize] = useState('');
  const [allProductSizes, setAllProductSizes] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productSizeTableImage, setProductSizeTableImage] = useState(null);
  const [productColor, setProductColor] = useState('');
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState([]);
  const [stockQuantity, setStockQuantity] = useState('');
  const [description, setDescription] = useState('');
  const token = getToken();

  const setSizeFunction = (value) => {
    setSize(value);
  };

  const addSize = () => {
    const newAllProductSizes = [...allProductSizes];
    newAllProductSizes.push(size);
    setAllProductSizes(newAllProductSizes);
    setSize('');
  }

  const removeSize = (value) => {
    const newAllProductSizes = allProductSizes.filter((size) => size !== value);
    setAllProductSizes(newAllProductSizes);
  };

  const handleUpload = () => {
    const formData = new FormData();

    productImages.forEach((file) => {
      formData.append("productImages", file);
    });

    formData.append("productName", productName);
    formData.append("price", 10);
    formData.append("stockQuantity", 1);
    formData.append("description", description);
    formData.append("category", 'Moda');

    return formData;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    return axios
      .post(process.env.NEXT_PUBLIC_API_URL_REGISTER_PRODUCT,
        // {
        //   productImages,
        //   // productSizeTableImage,
        //   productColor,
        //   productName,
        //   productBrand,
        //   price,
        //   categories,
        //   stockQuantity,
        //   description,
        // },
        handleUpload(),
        {
          headers: { authorization: token }
        }
      )
      .then((res) => {
        if (!res) return setRegisterProductError('Sem conexação.')
        console.log(res)
        return setRegisterProductSuccessfulMessage('Produto Cadastrado com sucesso!');
      })
      .catch(({ response }) => {
        console.log(response)
        if (!response) return setRegisterProductError('Sem conexação.');
        setRegisterProductError('Não foi possivel cadastrar o produto.');
      })
  }

  console.log("productImages", productImages)
  // console.log("productSizeTableImage", productSizeTableImage)
  // console.log("productColor", productColor)
  // console.log("productName", productName)
  // console.log("productBrand", productBrand)
  // console.log("price", price)
  // console.log("categories", categories)
  // console.log("stockQuantity", stockQuantity)
  // console.log("description", description)

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
                <ProductNameInput setProductName={setProductName} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ProductBrandInput setProductBrand={setProductBrand} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ProductColorInput setProductColor={setProductColor} />
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
              <Grid alignItems="center" container item spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ProductSizeInput size={size} setSize={setSizeFunction} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AddSizeButton onClick={addSize}>Adicionar Tamanho</AddSizeButton>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                {allProductSizes.map((size, index) => {
                  return (
                    <Grid item key={index}>
                      <InputWithX onClick={(e) => removeSize(e.currentTarget.textContent)}>
                        <SizeText>
                          {size}
                        </SizeText>
                        <div>
                          <DeleteIcon />
                        </div>
                      </InputWithX>
                    </Grid>
                  )
                })}
              </Grid>
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
                  <button onClick={handleUpload}>kkk</button>
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
