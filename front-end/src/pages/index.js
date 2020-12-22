import Head from '../infra/components/Head';
import Typography from '../components/foundation/Typography';
import Header from '../patterns/Header';
import Footer from '../patterns/Footer';

export default function Home() {
  return (
    <div className='container'>
      <Head title='Home - Cayama' />
      <Header />
      <main>
        <Typography>
          pagina inicial
        </Typography>
      </main>
      <Footer />
    </div>
  );
}
