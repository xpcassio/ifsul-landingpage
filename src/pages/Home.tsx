import Cards from '../components/Cards';
import CountDown from '../components/CountDown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingHero from '../components/LandingHero';
import Navegacao from '../components/Navegacao';

export default function Home() {
  return (
    <>
      <LandingHero />
      <Navegacao />

      <Header identificacao="sobre" texto="Sobre" />
      <Cards />
      <Header identificacao="countdown" texto="Countdown" />
      <CountDown />
      <Footer />
    </>
  );
}
