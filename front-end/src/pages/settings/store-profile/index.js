import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../patterns/header';
import Head from '../../../infra/components/head';
import Footer from '../../../patterns/footer';
import { getToken } from '../../../utils/index';
import { PageContainerSection } from '../../../components/dataGrid';
import { EditableStoreData, EditableCarroselData } from '../../../components/accountsData';
// import { Container } from './styles';

function StoreProfile() {
  const token = getToken();
  const allUserData = useSelector((state) => state.userDataReducer.userData);
  const [carrosselImages, setCarrosselImages] = useState([]);

  return (
    <div>
      <Head title="Profile" />
      <Header />
      <main>
        <PageContainerSection>
          <h3>Minha Loja</h3>
          {allUserData.storeData.storeName ?
            <EditableStoreData
              phone={allUserData.storeData.phone}
              storeName={allUserData.storeData.storeName}
              cnpj={allUserData.storeData.cnpj}
            />
            :
            null
          }
          <EditableCarroselData initialFiles={carrosselImages} />
          {/* Registrar Cores da loja, primaria e secundaria */}
          {/* Registrar categorias */}
          {/* Registrar Logo */}
          {/* Registrar fotos de capa */}
        </PageContainerSection>
      </main>
      <Footer />
    </div>
  );
}

export default StoreProfile;