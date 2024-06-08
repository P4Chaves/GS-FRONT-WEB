import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './Home.scss';
import oceanImage1 from '../../assets/images/fundo-mar.jpg';
import oceanImage2 from '../../assets/images/plastico.jpg';
import oceanImage3 from '../../assets/images/materiais-gs.jpg';

const Home = () => {
  const [expectedResults, setExpectedResults] = useState([]);

  useEffect(() => {
    fetch('/expectedResults.json')
      .then(response => response.json())
      .then(data => setExpectedResults(data.results))
      .catch(error => console.error('Error fetching expected results:', error));
  }, []);

  return (
    <Container className="home">
      <Row className="my-5">
        <Col>
          <h1>Bem-vindo ao Info Wave App</h1>
          <p className="lead">
            Desenvolvendo um aplicativo móvel para visualizar dados sobre a saúde dos oceanos e educar o público sobre a poluição marinha.
          </p>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        <Col md={8}>
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={oceanImage1} alt="Ocean Image 1" />
              <Carousel.Caption>
                <h3>Visualização de Dados em Tempo Real</h3>
                <p>Veja a qualidade da água em tempo real.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={oceanImage2} alt="Ocean Image 2" />
              <Carousel.Caption>
                <h3>Informações Educativas</h3>
                <p>Aprenda sobre poluição marinha e como combatê-la.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={oceanImage3} alt="Ocean Image 3" />
              <Carousel.Caption>
                <h3>Ações Sugeridas</h3>
                <p>Descubra ações práticas para ajudar a preservar os oceanos.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Visualização de Dados em Tempo Real</Card.Title>
              <Card.Text>
                Mostra dados em tempo real sobre a qualidade da água em diferentes praias e zonas costeiras.
              </Card.Text>
              <Link to="/dashboard"><Button variant="primary">Saiba mais</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Informações Educativas</Card.Title>
              <Card.Text>
                Explica os diferentes tipos de poluição marinha, suas fontes, e impactos no ecossistema e na saúde humana.
              </Card.Text>
              <Link to="/dashboard"><Button variant="primary">Saiba mais</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Ações Sugeridas</Card.Title>
              <Card.Text>
                Sugere ações que os usuários podem tomar para reduzir a poluição, como diminuir o uso de plásticos e participar de limpezas de praias.
              </Card.Text>
              <Link to="/dashboard"><Button variant="primary">Saiba mais</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Resultados Esperados</h2>
          <ul>
            {expectedResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;


