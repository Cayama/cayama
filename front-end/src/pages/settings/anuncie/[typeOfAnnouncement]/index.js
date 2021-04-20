import React, { useState, useRef } from 'react';
import axios from 'axios';
import Footer from '../../../../patterns/footer';
import SimplerHeader from '../../../../patterns/header/simplerHeader';
import useRouterFunction from '../../../../infra/components/useRouter';
import { CardWithSearchCategoryInput } from '../../../../components/cards';
import CategoriesToChoose from '../../../../components/categoriesToChoose';
import { CayamaCategorySearchMain, CayamaCategorySearchH1 } from './styles';
import { handleUseRef } from '../../../../utils/index';
import categoriesCayamaMock from '../../../../../dataMock/categoriesCayamaMock';

const CayamaCategorySearchRegister = () => {
  const [catergoriesArray, setCatergoriesArray] = useState(null);
  const productName = useRef('');
  const { query: { typeOfAnnouncement } } = useRouterFunction();

  const searchForCategory = () => {
    // axios.get(`${process.env.NEXT_PUBLIC_API_URL_SEARCH_CATEGORY_BY_PRODUCT_NAME}?productName=${productName}`)
    //   .then((response) => {
    //     setCatergoriesArray(categoriesCayamaMock)
    //   })
    //   .catch((response) => {

    //   })
    setCatergoriesArray(categoriesCayamaMock)
  }

  return (
    <div>
      <SimplerHeader />
      <CayamaCategorySearchMain>
        <CayamaCategorySearchH1>Identifique seu produto</CayamaCategorySearchH1>
        <CardWithSearchCategoryInput
          setInput={handleUseRef}
          defaultValue={productName.current}
          fieldToUseRef={productName}
          onClick={searchForCategory}
        />
        {catergoriesArray ? <CategoriesToChoose typeOfAnnouncement={typeOfAnnouncement} productName={productName} categoriesArray={catergoriesArray} /> : null}
      </CayamaCategorySearchMain>
      <Footer />
    </div>
  );
}

export default CayamaCategorySearchRegister;
