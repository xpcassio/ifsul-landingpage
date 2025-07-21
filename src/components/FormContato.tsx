import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function FormContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome" className="mb-4">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            size="lg"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            size="lg"
          />
        </Form.Group>

        <Form.Group controlId="formMensagem" className="mb-4">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Digite sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            size="lg"
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="outline-secondary" size="lg" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
