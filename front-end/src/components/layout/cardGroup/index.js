import { useRouter } from 'next/router';
import Image from '../../../infra/components/image';
import Link from '../../../infra/components/link';
import { ContainerRowButtons, ContainerColumn } from '../../dataGrid';
import { MyShippingCard } from './styles';
import { CardTitle } from '../../foundation/text';
import { CardButton } from '../../layout/buttonGroup';
import { ImageContainer } from '../../layout/imageGroup';

const ShippingCard = ({ src, title, authorizationRoute }) => {
  const router = useRouter();
  return (
    <MyShippingCard>
      <ContainerColumn>
        <ImageContainer width='50px' height='50px'>
          <Image src={src} width='100%' height='100%' />
        </ImageContainer>
        <CardTitle>
          {title}
        </CardTitle>
        <ContainerRowButtons>
          <CardButton text='Autorizar' onClick={() => router.push(authorizationRoute)} />
          <Link href={`/settings/shippings/${title.replace(' ', '-').toLowerCase()}`}>
            Saiba Mais
          </Link>
        </ContainerRowButtons>
      </ContainerColumn>
    </MyShippingCard>
  )
};

export default ShippingCard;
