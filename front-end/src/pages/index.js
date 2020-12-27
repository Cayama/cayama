import Head from '../infra/components/head';
import { Title } from '../components/foundation/text';
import Header from '../patterns/header';
import Footer from '../patterns/footer';

export default function Home() {
  return (
    <div className='container'>
      <Head title='Home - Cayama' />
      <main>
        <Header />
          <Title>
            pagina inicial
          </Title>
      </main>
      <Footer />
    </div>
  );
}
