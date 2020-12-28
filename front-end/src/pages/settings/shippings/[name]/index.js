import { useRouter } from 'next/router';
import Head from '../../../../infra/components/head';
import Header from '../../../../patterns/header';
import Footer from '../../../../patterns/footer';

const ShippingsDetailsPage = () => {
  const router = useRouter();
  console.log(router)
  return (
    <div>
      <Head title="Cayama - Melhor Envio" />
      <Header />
      <div>pagina de detalhes dos tipos de frete</div>
      <Footer />
    </div>
  )
};

export default ShippingsDetailsPage;
