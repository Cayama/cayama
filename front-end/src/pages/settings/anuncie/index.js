import React from 'react';
import Footer from '../../../patterns/footer';
import SimplerHeader from '../../../patterns/header/simplerHeader';
import { IconOnlyCard } from '../../../components/cards';

import WorkIcon from '@material-ui/icons/Work';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {
  AnnouncementIconsContainer,
  H1Announcement,
  AnnouncementMain,
  WhiteStyleDiv,
} from './styles';

function StartAnnouncementPage() {
  return (
    <div>
      <SimplerHeader />
      <AnnouncementMain>

        <H1Announcement>Vamos começar: O que você vai anunciar?</H1Announcement>

        <AnnouncementIconsContainer>
          <IconOnlyCard
            icon={<LocalMallIcon style={{ fontSize: 55, color: '#FF9914' }} />}
            title="Produto"
            href="/settings/anuncie/products"
          />
          <IconOnlyCard
            icon={<WorkIcon style={{ fontSize: 55, color: '#FF9914' }} />}
            title="Serviço"
            href="/settings/anuncie/services"
          />
        </AnnouncementIconsContainer>
        <WhiteStyleDiv />
      </AnnouncementMain>
      <Footer />
    </div>
  );
}

export default StartAnnouncementPage;
