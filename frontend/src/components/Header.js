import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href={"/writeblog"}>WriteBlog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;