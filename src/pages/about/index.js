import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import log1 from "../../img/mern.png"
export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header contain">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Sobre mi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/* //! Sobre mi */}
        <Row className="sec_sp d-flex justify-content-center">
          <Col lg="12 text-center">
            <h3 className="color_sec py-4 title-contact">{dataabout.title}</h3>
          </Col>
          <Col lg="12" className="d-flex align-items-center justify-content-center">
            <div className="text-center w-75">
              <p>Hola 😎 un gusto, soy Cristian Albornoz, y soy un  desarrollador Autodidacta.</p>
              <p>Me encanta hacer deporte (GYM) y jugar a la play, e infaltable un buen mate para Codear</p>
              <p>Soy un joven apasionado por la Tecnología, intentado siempre aprender algo nuevo.</p>
              <p>Siempre desde chico me intereso la informática , pero mi primer acercamiento con ella fue en la ciberSeguridad a mis 13 años (backtrack), era un script kiddie, asta los 14 años que no pude seguir aprendiendo (por falta de recursos)</p>
              <p>En el transcurso de mis 15 años a 20 años siempre tuve contacto con la informática. <br /> Asta que en mis 21 años, por ciertos motivos se me dio por aprender Programación (Desarrollo web)<br /> Me fue mal al principio por el simple hecho que no tenía las bases de Programación y no tenía mucho tiempo libre por el Trabajo, así que decidí posponerlo asta por un tiempo.</p>
              <p>A mis 22 años ingresé a la facultad en la carrera de Ing.informática  UNT, pero no puede terminar la carrera por problemas económicos y personales..</p>
              <p>Así que, me decidí que si no podía estudiar formalmente en una Facultad por ahora, lo haría de forma Autodidacta.....</p>
              <p>Este Año  luego de terminar mi trabajo, comencé a estudiar Desarrollo Web</p>
              <p className="fw-bold">Estoy en busca de mi primera experiencia en el mundo IT</p>
              <p>Tengo Conocimiento en las siguientes Tecnologías:</p>
            </div>
          </Col>
          <Col lg="12">
            <div className=" d-flex justify-content-center">
              <img src={log1} className=" w-75" />
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
