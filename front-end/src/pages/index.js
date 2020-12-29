import Paper from '@material-ui/core/Paper';
import Head from '../infra/components/head';
import { Title } from '../components/foundation/text';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import { TextMobileStepper } from '../components/carrossel';
import ShippingCard from '../components/layout/cardGroup';

export default function Home() {
  return (
    <div>
      <Head title='Home - Cayama' />
      <Header />
      <main>
        <TextMobileStepper />
        <Paper>
          <Title>
            Categorias
          </Title>
        </Paper>
        {/* <ShippingCard
          src='https://cayama-upload.s3.amazonaws.com/d4d2cc50c72532aab0d45edd7f787cac-Stella-Artois-275ml.jpg'
          title="Melhor Envio"
          authorizationRoute='https://sandbox.melhorenvio.com.br/oauth/authorize?client_id=1119&redirect_uri=https://afb66f75ea16.ngrok.io/settings/shippings/melhor-envio&response_type=code&scope=cart-read'
        /> */}
      </main>
      <Footer />
    </div>
  );
}
