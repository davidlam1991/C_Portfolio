import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import IconImage from "./IconImage.jsx";

import eyeIcon from "../assets/img/emojis/eye-icon.png";
import avatarIcon1 from "../assets/img/emojis/cherry-icon-1.png";
import avatarIcon2 from "../assets/img/emojis/cherry-icon-2.png";
import speechIcon from "../assets/img/emojis/speech-icon.png";
import sparkleIcon from "../assets/img/emojis/sparkle-icon.png";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const avatarIcon = isHovered ? avatarIcon2 : avatarIcon1;

  return (
    <section className="intro" id="into">
      <Container>
        <Row>
          <Col>
            <p>
              Hi&#160;
              <IconImage src={eyeIcon} /> I'm Cherry&#160;
              <IconImage
                src={avatarIcon}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </p>
            <p>
              Product designer & art director&#160;
              <IconImage src={speechIcon} />
            </p>
            <p>
              Creating <span className="underline">communicative designs</span>{" "}
              that
            </p>
            <p>are seamless, purposeful, and</p>
            <p>
              emotionally fulfilling.&#160;
              <IconImage src={sparkleIcon} />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
