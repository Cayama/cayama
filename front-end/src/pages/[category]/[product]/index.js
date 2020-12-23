import Head from '../../../infra/components/Head';
import { Title } from '../../../components/foundation/text';
import Header from '../../../patterns/Header';
import Footer from '../../../patterns/Footer';

export default function Home() {
  return (
    <div>
      <Head title="Home - Cayama" />
      <Header />
      <main>
        <Title>
          pagina de produtos
        </Title>
      </main>
      <Footer />
    </div>
  );
}
