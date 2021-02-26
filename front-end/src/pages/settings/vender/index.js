import React, { useState } from 'react';
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

function RegisterProductPage() {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [allProductSizes, setAllProductSizes] = useState([]);
  const [size, setSize] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [productSizeTableImage, setProductSizeTableImage] = useState(null);

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
                <ProductNameInput />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ProductBrandInput />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ProductColorInput />
              </Grid>
              {categoriesArray.length === 0 ?
                <Grid item xs={12} sm={6}>
                  <Link href="register-category">Cadastre Categorias para sua loja</Link>
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
                {allProductSizes.map((size) => {
                  return (
                    <Grid item>
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
                  <ProductDescriptionInput />
                </Grid>
              </Grid>
              <Grid container item spacing={2} justify="center">
                <Grid item xs={12} sm={6}>
                  <RegisterProductButton>Cadastrar</RegisterProductButton>
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
