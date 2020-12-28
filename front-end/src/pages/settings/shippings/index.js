import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MySettingsShipping } from './styles';
import Footer from '../../../patterns/footer';
import Header from '../../../patterns/header'
import Head from '../../../infra/components/head';
import { TextButton } from '../../../components/layout/buttonGroup';

const SettingsShippings = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmNzc1NDBjOWNhMjUxNDk1ZDg2MWNhMiIsImZpcnN0TmFtZSI6IkhlbnJpcXVlIiwibGFzdE5hbWUiOiJHdWVycmEgRmFndW5kZXMiLCJlbWFpbCI6ImphZnNkZXNzc3NzdEBqYWZlc3QuY29tLmJyIiwiYmlydGhEYXRlIjoiMDIvMDcvMTk5NCIsImluZmx1ZW5jZXIiOnsic29jaWFsTWVkaWEiOiJZb3VUdWJlIiwiY29udGVudFR5cGUiOiJNb2RhIiwic29jaWFsTWVkaWFOYW1lIjoiSW5zdGFncmFtIiwiaW5mbHVlbmNlckxpbmsiOiJKYWZldGVjaCJ9LCJhZGRyZXNzZXMiOlt7Im5hbWUiOiJKYWZldCBIZW5yaXF1ZSBHdWVycmEgRmFndW5kZXMiLCJjZXAiOiIzMDM1MDY2MCIsInN0YXRlIjoiTWluYXMgR2VyYWlzIiwiY2l0eSI6IkJlbG8gSG9yaXpvbnRlIiwibmVpZ2hib3Job29kIjoiU8OjbyBCZW50byIsInN0cmVldCI6IlJ1YSBEb3V0b3IgTWFyaW8gUGlyZXMiLCJudW1iZXIiOiI5MSIsImNvbXBsZW1lbnQiOiJDYXNhIiwicGhvbmUiOiIzMTk5NjQ3MTg4OCJ9XSwicHJvZHVjdHMiOltdLCJiYW5rQWNjb3VudCI6eyJiYW5rIjoiSW50ZSIsImJhbmtEaWdpdCI6NzcsImFjY291bnROdW1iZXJXaXRoRGlnaXQiOiI0NTE1NTYzNDYzNDciLCJhZ2VuY3kiOiIwMDAxIn19LCJpYXQiOjE2MDg5OTgzMDUsImV4cCI6MTYwOTAwMTkwNX0.HPY_KSK0G4FSiMn3c5rkfVtM3pvcSpXsceyO1TBJiBE'

  useEffect(() => {
    if (router.query.code) {
      setLoading(true);
      axios.post(
        `http://localhost:3001/shipping/me-authorization`,
        { code: router.query.code },
        { headers: { Authorization: token } }
      )
      .then((response) => {
        console.log(response);
        setUpdatedMEShipping(true);
        setLoading(false)
      })
      .catch((error) => console.error(error));
    }
  }, [router.query.code])


  if (loading) return <span>Loading...</span>

  return (
    <div>
      <Head title='Fretes' />
      <Header />
      <MySettingsShipping>
        <span>Melhor Envio</span>
        <TextButton text='Autorizar' onClick={() => router.push('https://sandbox.melhorenvio.com.br/oauth/authorize?client_id=1119&redirect_uri=https://afb66f75ea16.ngrok.io/settings/shippings&response_type=code&scope=cart-read')}/>
      </MySettingsShipping>
      <Footer />
    </div>
  );
}

export default SettingsShippings;
