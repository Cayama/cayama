import { useEffect } from 'react'
import Head from '../infra/components/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import { CarouselComponent, tutorialSteps } from '../components/carrossel';
import { PromoCard, ProductCard } from '../components/cards';
import { ProductsCardSection } from '../components/dataGrid';
import { HomePageTitles } from '../components/titles';
import { ProductsSectionDisplay } from '../components/productsSectionDisplay';

import productsMock from '../../dataMock/productsMock';

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
        <ProductsSectionDisplay productsArray={productsMock} />
      </main>
      <Footer />
    </div>
  );
}
