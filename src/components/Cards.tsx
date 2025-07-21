import { Card, Col, Container, Row } from 'react-bootstrap';
import ListIcon from '../assets/svg/list.svg?react';
import CoinIcon from '../assets/svg/coin.svg?react';
import CpuIcon from '../assets/svg/cpu.svg?react';
import PaperIcon from '../assets/svg/paper.svg?react';
import PasswordIcon from '../assets/svg/password.svg?react';
import WrenchIcon from '../assets/svg/wrench.svg?react';

export default function Cards() {
  return (
    <Container>
      <Row>
        <Col xl={6} className="mb-4">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <ListIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Funcionalidade</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                et veritatis nam? Ratione vel fugit iure, mollitia aliquid
                numquam officia ipsum qui, ducimus tenetur non quas quod
                provident? Placeat, commodi!
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6} className="mb-4">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <PaperIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Usabilidade</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                et veritatis nam? Ratione vel fugit iure, mollitia aliquid
                numquam officia ipsum qui, ducimus tenetur non quas quod
                provident? Placeat, commodi!
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6} className="mb-4">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <CpuIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Desempenho</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                et veritatis nam? Ratione vel fugit iure, mollitia aliquid
                numquam officia ipsum qui, ducimus tenetur non quas quod
                provident? Placeat, commodi!
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6} className="mb-4">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <PasswordIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Segurança</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                et veritatis nam? Ratione vel fugit iure, mollitia aliquid
                numquam officia ipsum qui, ducimus tenetur non quas quod
                provident? Placeat, commodi!
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6} className="mb-4">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <WrenchIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Suporte e manutenção</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                et veritatis nam? Ratione vel fugit iure, mollitia aliquid
                numquam officia ipsum qui, ducimus tenetur non quas quod
                provident? Placeat, commodi!
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6}>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <CoinIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Custo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                et veritatis nam? Ratione vel fugit iure, mollitia aliquid
                numquam officia ipsum qui, ducimus tenetur non quas quod
                provident? Placeat, commodi!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
