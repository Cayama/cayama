import { useRouter } from 'next/router';
import Link from 'next/link';
import { MySettingsShipping } from './styles';
import Footer from '../../../patterns/footer';
import Header from '../../../patterns/header'
import Head from '../../../infra/components/head';
import { TextButton } from '../../../components/Layout/buttonGroup';

const SettingsShippings = () => {
  const router = useRouter();
  return (
    <div>
      <Head title='Fretes' />
      <Header />
      <MySettingsShipping>
        <TextButton text='Autorizar' onClick={() => router.push('https://sandbox.melhorenvio.com.br/oauth/authorize?client_id=1119&redirect_uri=https://6d7c2c5d4c26.ngrok.io&response_type=code&scope=cart-read')}/>
      </MySettingsShipping>
      <Footer />
    </div>
  );
}

export default SettingsShippings;
