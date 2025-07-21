import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function Navegacao() {
  const location = useLocation();

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
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                  to="/"
                >
                  Início
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link
                  className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}
                  to="/sobre"
                >
                  Sobre
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link
                  className={`nav-link ${location.pathname === '/contato' ? 'active' : ''}`}
                  to="/contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
}
