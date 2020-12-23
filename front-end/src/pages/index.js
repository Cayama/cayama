import Head from '../infra/components/Head';
import { Title } from '../components/foundation/text';
import Header from '../patterns/Header';
import Footer from '../patterns/Footer';

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
