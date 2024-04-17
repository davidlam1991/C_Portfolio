import { Col, Container, Row } from "react-bootstrap";

import linkedin from "../assets/img/linkedin.png";
import be from "../assets/img/be.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <p>© 2024 Cherry Wu</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={be} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
