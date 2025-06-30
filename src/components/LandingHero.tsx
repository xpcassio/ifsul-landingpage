import { Button, Container } from 'react-bootstrap';

export default function LandingHero() {
  return (
    <div className="landing-hero">
      <Container className="py-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="57"
          fill="currentColor"
          className="d-block mx-auto mb-4"
          viewBox="0 0 16 16"
          aria-label="Article icon"
        >
          <path d="M4 4h8v1H4V4zm0 2h8v1H4V6zm0 2h5v1H4V8zm-2-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" />
        </svg>
        <h1 className="display-5 fw-bold text-body-emphasis mb-0">
          Headless CMS
        </h1>
        <h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
        {/* <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            itaque modi? Eos placeat harum accusamus delectus quisquam atque et
            unde tempora ipsam, dicta autem rem provident quis ex quod tenetur.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button variant="secondary" size="lg">
              Saiba mais!
            </Button>
          </div>
        </div> */}
      </Container>
    </div>
  );
}
