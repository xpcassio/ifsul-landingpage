import { Container } from 'react-bootstrap';

export default function Navegacao() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light border-top py-0">
        <Container fluid className="justify-content-center">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item text-center">
                <a className="nav-link" aria-current="page" href="#inicio">
                  Início
                </a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
}
