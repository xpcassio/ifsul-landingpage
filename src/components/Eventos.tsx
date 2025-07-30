import { useEffect, useState } from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';

interface Event {
  time: string;
  description: string;
}

interface EventosProps {
  events: Event[];
}

export default function Eventos({ events }: EventosProps) {
  const [busca, setBusca] = useState('');
  const [eventosFiltrados, setEventosFiltrados] = useState<Event[]>(events);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Salvar dados no localStorage sempre que mudarem
  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      event.description.toLowerCase().includes(busca.toLowerCase())
    );
    setEventosFiltrados(filteredEvents);
  }, [busca, events]);

  return (
    <Container className="mt-5">
      <Card className="text-center mb-4">
        <Card.Body>
          <Card.Title>Today</Card.Title>
          <Card.Text>{currentDate}</Card.Text>
          <Button variant="primary">+</Button>
        </Card.Body>
      </Card>
      <h4>Upcoming Events</h4>
      <ListGroup>
        <ListGroup.Item>
          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Pesquisar evento..."
              aria-label="Pesquisar evento"
              onChange={(e) => setBusca(e.target.value)}
            />
          </form>
        </ListGroup.Item>
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((event, index: number) => (
            <ListGroup.Item key={index}>
              <b className="mr-1">{event.time}</b> - {event.description}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="text-center">
            <em>Nenhum evento encontrado.</em>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
}
