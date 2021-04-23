import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../patterns/header';
import Head from '../../../infra/components/head';
import Footer from '../../../patterns/footer';
import { PageContainerSection } from '../../../components/dataGrid';
import {
  EditableShippingData,
  EditableCardsData,
  EditableUserPersonalData,
  EditableAccountData,
  EditableInfluencerData,
  EditableStoreData,
} from '../../../components/accountsData';
import { getToken } from '../../../utils/index';

function Profile() {
  const token = getToken();
  const allUserData = useSelector((state) => state.userDataReducer.userData);

  return (
    <div>
      <Head title="Profile" />
      <Header />
      <main>
        <PageContainerSection>
          <h3>Meus Dados</h3>
          <EditableAccountData email={allUserData.accountData.email} />
          <EditableUserPersonalData 
            phone={allUserData.personalData.phone}
            firstName={allUserData.personalData.firstName}
            lastName={allUserData.personalData.lastName}
            cpf={allUserData.personalData.cpf}
          />
          {allUserData.isInfluencer ?
            <EditableInfluencerData
              socialMedia={allUserData.influencer.socialMedia}
              contentType={allUserData.influencer.contentType}
              socialMediaName={allUserData.influencer.socialMediaName}
              influencerLink={allUserData.influencer.influencerLink}
            />
            :
            null
          }
          {allUserData.storeData.storeName ?
            <EditableStoreData
              phone={allUserData.storeData.phone}
              storeName={allUserData.storeData.storeName}
              cnpj={allUserData.storeData.cnpj}
            />
            :
            null
          }
          <EditableCardsData cardsInfo={allUserData.cardData} />
          <EditableShippingData addresses={allUserData.addresses} />
        </PageContainerSection>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;