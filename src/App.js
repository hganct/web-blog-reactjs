import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap';

function App() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="." className="text-uppercase fw-bold">trungtienlearn.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Trang chủ</Nav.Link>
              <Nav.Link href="#link">Bài viết</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Container fluid>
          <Row sm={1} lg={4}>
            <Col sm={12}>
              <Card>
                <Card.Img variant="top" src="/assets/images/img-post.jpg"/>
                <CardBody>
                  <CardTitle>Tiêu đề bài viết</CardTitle>
                  <CardSubtitle><span>Tác giải: Admin</span> <span>Ngày đăng: 1/1/2024</span></CardSubtitle>
                  <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid unde optio praesentium modi debitis quo labore beatae enim distinctio earum temporibus, est reprehenderit neque provident! Reiciendis ipsum alias repellendus.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={12}>
              <Card>
                <Card.Img variant="top" src="/assets/images/img-post.jpg"/>
                <CardBody>
                  <CardTitle>Tiêu đề bài viết</CardTitle>
                  <CardSubtitle><span>Tác giải: Admin</span> <span>Ngày đăng: 1/1/2024</span></CardSubtitle>
                  <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid unde optio praesentium modi debitis quo labore beatae enim distinctio earum temporibus, est reprehenderit neque provident! Reiciendis ipsum alias repellendus.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="/assets/images/img-post.jpg"/>
                <CardBody>
                  <CardTitle>Tiêu đề bài viết</CardTitle>
                  <CardSubtitle><span>Tác giải: Admin</span> <span>Ngày đăng: 1/1/2024</span></CardSubtitle>
                  <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid unde optio praesentium modi debitis quo labore beatae enim distinctio earum temporibus, est reprehenderit neque provident! Reiciendis ipsum alias repellendus.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="/assets/images/img-post.jpg"/>
                <CardBody>
                  <CardTitle>Tiêu đề bài viết</CardTitle>
                  <CardSubtitle><span>Tác giải: Admin</span> <span>Ngày đăng: 1/1/2024</span></CardSubtitle>
                  <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid unde optio praesentium modi debitis quo labore beatae enim distinctio earum temporibus, est reprehenderit neque provident! Reiciendis ipsum alias repellendus.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="/assets/images/img-post.jpg"/>
                <CardBody>
                  <CardTitle>Tiêu đề bài viết</CardTitle>
                  <CardSubtitle><span>Tác giải: Admin</span> <span>Ngày đăng: 1/1/2024</span></CardSubtitle>
                  <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid unde optio praesentium modi debitis quo labore beatae enim distinctio earum temporibus, est reprehenderit neque provident! Reiciendis ipsum alias repellendus.</CardText>
                  <Card.Link href="#">Xem tiếp</Card.Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <div className="bg-warning fst-italic text-center">Copyright &copy; 2023. <a href=".">trungtienlearn.com</a></div>
      </footer>
    </div>
  );
}

export default App;
