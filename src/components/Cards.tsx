import { Card, Container } from 'react-bootstrap';

export default function Cards() {
  return (
    <Container>
      <p>
        Apresentar a ferramenta Headless CMS, tanto em um nível gerencial quanto
        em sua aplicação prática. Para isso, propõe-se um método de avaliação
        composto por seis características qualitativas. Espera-se que esse
        método seja utilizado como base para a tomada de decisão, auxiliando
        gestores e desenvolvedores a escolher a solução mais adequada às suas
        necessidades e objetivos.
      </p>
      <div className="row">
        <div className="col-12 col-md-6 col-lg">
          <Card>
            <Card.Body>
              <Card.Title>Funcionalidade</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg">
          <Card>
            <Card.Body>
              <Card.Title>Usabilidade</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg">
          <Card>
            <Card.Body>
              <Card.Title>Desempenho</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg">
          <Card>
            <Card.Body>
              <Card.Title>Segurança</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg">
          <Card>
            <Card.Body>
              <Card.Title>Suporte e manutenção</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg">
          <Card>
            <Card.Body>
              <Card.Title>Custo</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
