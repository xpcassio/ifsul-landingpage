import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingHero from '../components/LandingHero';
import Navegacao from '../components/Navegacao';

export default function Sobre() {
  return (
    <>
      <LandingHero />
      <Navegacao />

      <Row className="py-5">
        <Col md={8} lg={5} className="mx-auto">
          <Header identificacao="sobre" texto="Sobre" />
          <Container className="mb-4">
            <p>
              Apresentar a ferramenta Headless CMS, tanto em um nível gerencial
              quanto em sua aplicação prática. Para isso, propõe-se um método de
              avaliação composto por seis características qualitativas.
              Espera-se que esse método seja utilizado como base para a tomada
              de decisão, auxiliando gestores e desenvolvedores a escolher a
              solução mais adequada às suas necessidades e objetivos.
            </p>
          </Container>
          <Cards />
        </Col>
      </Row>

      <Footer />
    </>
  );
}
