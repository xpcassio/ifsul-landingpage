import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import LandingHero from '../components/LandingHero';
import Navegacao from '../components/Navegacao';
import { useEffect } from 'react';

export default function Contato() {
  // Mudar o título da página
  useEffect(() => {
    document.title = 'Landing Page - Contato';
  }, []);

  return (
    <>
      <LandingHero />
      <Navegacao />

      <Row className="py-5">
        <Col md={8} lg={5} className="mx-auto">
          <Header identificacao="contato" texto="Contato" />
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              necessitatibus facere recusandae ad consequuntur, nam obcaecati
              pariatur possimus ab nemo reprehenderit, voluptate vitae
              asperiores, assumenda ducimus perferendis quisquam quam
              voluptatem!
            </p>
          </Container>
          <FormContato />
        </Col>
      </Row>

      <Footer />
    </>
  );
}
