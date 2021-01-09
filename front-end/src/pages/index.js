import Paper from '@material-ui/core/Paper';
import Head from '../infra/components/head';
import { Title } from '../components/foundation/text';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import { CarouselComponent, tutorialSteps } from '../components/carrossel';
import { PromoCard, ProductCard } from '../components/cards';
import { ProductsCardSection } from '../components/dataGrid';

export default function Home() {
  return (
    <div>
      <Head title='Home - Cayama' />
      <Header />
      <main>
        <CarouselComponent carouselImageArray={tutorialSteps} />
        <PromoCard />
        <Paper>
          <Title>
            Produtos em destaque
          </Title>
        </Paper>
        <ProductsCardSection>
          <ProductCard
            price='R$250,00'
            productName='Bola de Futebol'
            shipping={false}
            category='esporte'
            storeName='cayama'
          />
          <ProductCard
            price='R$350,00'
            productName='Óculos Escuro'
            shipping={true}
            category='moda-masculina'
            storeName='cayama'
          />
          <ProductCard
            price='R$100,00'
            productName='Chinelo Havaianas'
            shipping={true}
            category='moda-masculina'
            storeName='cayama'
          />
        </ProductsCardSection>
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
