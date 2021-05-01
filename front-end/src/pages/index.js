import React from 'react';
import Head from '../infra/components/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import { CarrosselComponent, tutorialSteps } from '../components/carrossel';
import { PromoCard } from '../components/cards';
import { HomePageTitles } from '../components/titles';
import { ProductsSectionDisplay } from '../components/productsSectionDisplay';

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_GET_PRODUCTS_BY_FIELD}?field=category&fieldValue=Blusas`, 
  );
  const { products } = await res.json();

  return {
    props: {
      productsArray: products,
    }
  }
};

export default function Home({ productsArray }) {
  return (
    <div>
      <Head title='Home - Cayama' />
      <Header />
      <main>
        <CarrosselComponent carrosselImageArray={tutorialSteps} />
        <PromoCard />
        <HomePageTitles>
          Produtos em destaque
        </HomePageTitles>
        <ProductsSectionDisplay productsArray={productsArray} />
      </main>
      <Footer />
    </div>
  );
}
