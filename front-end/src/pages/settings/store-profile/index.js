import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../patterns/header';
import Head from '../../../infra/components/head';
import Footer from '../../../patterns/footer';
import { getToken } from '../../../utils/index';
import { PageContainerSection } from '../../../components/dataGrid';
import {
  EditableStoreData,
  EditableCarroselData,
  EditableStoreColorsData,
  EditableLogoData,
  EditableStoreCategories,
} from '../../../components/accountsData';
// import { Container } from './styles';

function StoreProfile() {
  const allUserData = useSelector((state) => state.userDataReducer.userData);

  return (
    <div>
      <Head title="Profile" />
      <Header />
      <main>
        <PageContainerSection>
          <h3>Minha Loja</h3>
          {allUserData.storeData.storeName ?
            <EditableStoreData
              phone={allUserData.storeData.storePersonalData.phone}
              storeName={allUserData.storeData.storePersonalData.storeName}
              cnpj={allUserData.storeData.storePersonalData.cnpj}
            />
            :
            null
          }
          <EditableCarroselData initialFiles={allUserData.storeData.carrosselImages.carrosselImgUrls} />
          <EditableStoreColorsData
            primaryColorDB={allUserData.storeData.storeColorsData.primaryColor}
            secondaryColorDB={allUserData.storeData.storeColorsData.secondaryColor}
          />
          <EditableStoreCategories categoriesDB={allUserData.storeData.storeCategoriesData} />
          <EditableLogoData initialFiles={allUserData.storeData.logoImage.logoImgUrls} />
        </PageContainerSection>
      </main>
      <Footer />
    </div>
  );
}

export default StoreProfile;