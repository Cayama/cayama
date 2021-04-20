import React from 'react';
import Header from '../../../patterns/header';
import Head from '../../../infra/components/head';
import Footer from '../../../patterns/footer';
import Grid from '@material-ui/core/Grid';
// import { } from './styles';
import { PageContainerSection } from '../../../components/dataGrid';
import {
  EditableShippingData,
  EditableCardsData,
  EditableUserPersonalData,
  EditableUserData,
} from '../../../components/accountsData';

function Profile() {
  return (
    <div>
      <Head title="Profile" />
      <Header />
      <main>
        <PageContainerSection>
          <h3>Meus Dados</h3>
          <EditableUserData email="jafetguerra@hotmail.com" />
          <EditableUserPersonalData 
            phone="31996471888"
            firstName="Jafet Henrique"
            lastName="Guerra Fagunde"
            cpf="12900211638"
          />
          <EditableCardsData />
          <EditableShippingData />
        </PageContainerSection>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;