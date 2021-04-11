import { useState, useEffect } from 'react'
import axios from 'axios';
import Head from '../infra/components/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import { CarouselComponent, tutorialSteps } from '../components/carrossel';
import { PromoCard, ProductCard } from '../components/cards';
import { ProductsCardSection } from '../components/dataGrid';
import { HomePageTitles } from '../components/titles';
import { ProductsSectionDisplay } from '../components/productsSectionDisplay';

import productsMock from '../../dataMock/productsMock';

// export async function getServerSideProps(context) {
//   const data = await axios.get(
//     process.env.NEXT_PUBLIC_API_URL_GET_PRODUCTS_BY_FIELD, 
//     {
//       field: 'category',
//       fieldValue: 'Blusas'
//     }
//   );
//   // console.log(res);
//   // const data = await res.json();

//   return {
//     props: {
//       productsArray: data,
//     }
//   }
// };

export default function Home() {
  const [products, setProducts] = useState([]);

  const test = async () => {
    const data = await axios.get(
      process.env.NEXT_PUBLIC_API_URL_GET_PRODUCTS_BY_FIELD, 
      {
        field: 'category',
        fieldValue: 'Blusas'
      }
    );
    return setProducts(data.data.products);
  }

  useEffect(() => {
    test();
  }, [])

  console.log(products);
  if (products.length === 0) return <div>Loading...</div>
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
        <ProductsSectionDisplay productsArray={products} />
      </main>
      <Footer />
    </div>
  );
}
