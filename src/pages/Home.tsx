import { Col, Container, Row } from 'react-bootstrap';
import CountDown from '../components/CountDown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingHero from '../components/LandingHero';
import Navegacao from '../components/Navegacao';
import { useEffect } from 'react';
import Eventos from '../components/Eventos';

export default function Home() {
  const events = [
    { time: '10:30', description: 'Reunião de planejamento do artigo' },
    { time: '12:00', description: 'Almoço com os co-autores' },
    { time: '13:00', description: 'Revisão final do artigo com o editor' },
    { time: '14:30', description: 'Apresentação do artigo na conferência' },
    { time: '15:30', description: 'Publicar o artigo na revista científica' },
  ];

  // Mudar o título da página
  useEffect(() => {
    document.title = 'Landing Page - Inicio';
  }, []);

  return (
    <>
      <LandingHero />
      <Navegacao />

      <Row className="py-5">
        <Col md={8} lg={5} className="mx-auto">
          <Header identificacao="countdown" texto="Countdown" />
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              necessitatibus facere recusandae ad consequuntur, nam obcaecati
              pariatur possimus ab nemo reprehenderit, voluptate vitae
              asperiores, assumenda ducimus perferendis quisquam quam
              voluptatem!
            </p>
          </Container>
          <CountDown />
          <Header identificacao="eventos" texto="Eventos" />
          <Eventos events={events} />
        </Col>
      </Row>

      <Footer />
    </>
  );
}
