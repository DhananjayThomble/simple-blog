import { URL } from "../config";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState(null);
  const [isLoaded, setLoading] = useState(false);
  useEffect(() => {
    fetch(URL + "/api/about")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.log(err))
      .then(() => setLoading(true));
  }, []);
  if (isLoaded) return <AboutPage content={data.content} />;
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}

const AboutPage = ({ content }) => (
  <Container>
    <Row>
      <Col>
        <h1>About US</h1>
      </Col>
      {/*<Col>2 of 2</Col>*/}
    </Row>
    <Row>
      <Col>{content}</Col>
      {/*<Col>2 of 3</Col>*/}
      {/*<Col>3 of 3</Col>*/}
    </Row>
  </Container>
);

export default About;
