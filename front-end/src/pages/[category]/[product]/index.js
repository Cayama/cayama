import Head from '../../../infra/components/head';
import { Title } from '../../../components/foundation/text';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';

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
