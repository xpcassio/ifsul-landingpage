import { Button, Card, Container, ListGroup } from 'react-bootstrap';

interface Event {
  time: string;
  description: string;
}

interface EventosProps {
  events: Event[];
}

export default function Eventos({ events }: EventosProps) {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

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
        {events.map((event, index: number) => (
          <ListGroup.Item key={index}>
            <b className="mr-1">{event.time}</b> - {event.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
