import { useEffect, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';

export default function FormContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Carregar dados do localStorage ao montar o componente
  useEffect(() => {
    const storedNome = localStorage.getItem('nome');
    const storedEmail = localStorage.getItem('email');
    const storedMensagem = localStorage.getItem('mensagem');

    if (storedNome) setNome(storedNome);
    if (storedEmail) setEmail(storedEmail);
    if (storedMensagem) setMensagem(storedMensagem);
  }, []);

  // Salvar dados no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('mensagem', mensagem);
  }, [nome, email, mensagem]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);
    setError('');

    // Simulação de envio de dados
    try {
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Mensagem:', mensagem);

      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Limpar os campos após o envio
      setNome('');
      setEmail('');
      setMensagem('');
      setSuccess(true);

      // Limpar localStorage após o envio
      localStorage.removeItem('nome');
      localStorage.removeItem('email');
      localStorage.removeItem('mensagem');
    } catch (err) {
      setError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
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

        {success && (
          <Alert variant="success" className="mt-4">
            Mensagem enviada com sucesso!
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="mt-4">
            {error}
          </Alert>
        )}
      </Form>
    </Container>
  );
}
