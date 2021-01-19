import Head from '../infra/components/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import { CarouselComponent, tutorialSteps } from '../components/carrossel';
import { PromoCard, ProductCard } from '../components/cards';
import { ProductsCardSection } from '../components/dataGrid';
import { HomePageTitles } from '../components/titles';

export default function Home() {
  return (
    <div>
      <Head title='Home - Cayama' />
      <Header />
      <main>
        <CarouselComponent carouselImageArray={tutorialSteps} />
        <PromoCard />
        <HomePageTitles>
          Produtos em destaque
        </HomePageTitles>
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
          <ProductCard
            price='R$100,00'
            productName='Chinelo Havaianas'
            shipping={true}
            category='moda-masculina'
            storeName='cayama'
          />
        </ProductsCardSection>
      </main>
      <Footer />
    </div>
  );
}
