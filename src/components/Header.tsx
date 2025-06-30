import { Container } from 'react-bootstrap';

interface HeaderProps {
  identificacao: string;
  texto: string;
}

export default function Header({ identificacao, texto }: HeaderProps) {
  return (
    <Container id={identificacao} className="mt-4">
      <h1>{texto}</h1>
      <hr />
    </Container>
  );
}
