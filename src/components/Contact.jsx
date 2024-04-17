import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Form from "./Form.jsx";

import toTop from "../assets/img/to-top.png";

export default function Contact() {
  return (
    <section className="contact-bg" id="contact">
      <Container>
        <Row className="contact">
          <Col>
            <div>
              <h2>Questions? Suggestions?</h2>
              <h2>Collaboration?</h2>
            </div>
            <div className="contact-p">
              <p>Please don't hesitate to get in touch with me</p>
              <p>
                or stalk me at&nbsp;
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <Form />
            <motion.div
              className="to-top"
              transition={{ type: "tween" }}
              whileHover={{ scale: 1.05, backgroundColor: "#4c7766" }}
            >
              <a href="#">
                <img src={toTop} />
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
