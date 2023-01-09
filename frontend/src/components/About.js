import { URL } from "../config";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About US</h1>
        </Col>
        {/*<Col>2 of 2</Col>*/}
      </Row>
      <Row>
        <Col>1 of 3</Col>
        {/*<Col>2 of 3</Col>*/}
        {/*<Col>3 of 3</Col>*/}
      </Row>
    </Container>
  );
}

export default About;
