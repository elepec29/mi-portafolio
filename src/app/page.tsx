import Image from "next/image";
import { Button, Col, ProgressBar, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row className="m-3" id="home">
        <Col xl={2} md={4} sm={4} xxl={2}>
          <Image
            className="mb-3"
            alt="Perfil Esteban"
            src={"/perfileelc.jpg"}
            width={150}
            height={150}
          />

          <h5>¡Hola, soy Esteban!</h5>
          <p>
            Ingeniero de Desarrollo de Software | Soluciones Innovadoras y
            Escalables
          </p>
          <Button size="sm" variant="primary" href="/cv" className="mb-3">
            Descargar CV
          </Button>
        </Col>
        <Col
          xl={10}
          md={8}
          sm={8}
          xxl={10}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          <p>
            Soy un Ingeniero de Desarrollo de Software con 6 años de experiencia
            en el diseño desarrollo e implementación de soluciones tecnológicas
            innovadoras para empresas de diferentes sectores. Mi enfoque se
            centra en el desarrollo de aplicaciones eficientes y escalables,
            aplicando las mejores prácticas en arquitectura de software y
            metodologías ágiles. Poseo habilidades avanzadas en backend,
            frontend y bases de datos, lo que me permite entregar proyectos
            completos, de alta calidad y alineados con los objetivos de negocio.
          </p>
          <ul>
            <b>Áreas de Experiencia</b>
            <li>
              <b>Frontend:</b> Desarrollo de interfaces de usuario interactivas
              y optimizadas con React.js, React Native y Next.js.
            </li>
            <li>
              <b>Backend:</b> Creación de APIs robustas y seguras con Node.js,
              NestJS y .NET.
            </li>
            <li>
              <b>Bases de Datos:</b> Diseño y optimización de bases de datos
              relacionales (MySQL, PL/SQL) y no relacionales (MongoDB).
            </li>
            <li>
              <b>Metodologías de Versionamiento:</b> Manejo de Git, GitHub,
              GitLab, Bitbucket y estrategias avanzadas como Gitflow.
            </li>
            <li>
              <b>Lenguajes de Programación:</b> Amplio conocimiento en
              JavaScript, TypeScript, C#, y Python.
            </li>
            <li>
              <b>Despliegue y Hosting:</b> Experiencia en la integración de
              aplicaciones con servicios cloud para ambientes de producción
              escalables.
            </li>
            <li>
              <b>Buenas Prácticas:</b> Uso de principios SOLID, Clean
              Architecture, testing automatizado y optimización de rendimiento.
            </li>
          </ul>{" "}
        </Col>
      </Row>
      <Row>
        <Col md={3} className="mb-3">
          <h4>Frontend</h4>
          <ProgressBar now={90} label="React.js" animated />
          <br />
          <ProgressBar now={85} label="Next.js" animated />
        </Col>
        <Col md={3}>
          <h4>Backend</h4>
          <ProgressBar now={90} label="Node.js" animated />
          <br />
          <ProgressBar now={80} label="NestJS" animated />
        </Col>
      </Row>
      <Row className="mt-3" id="proyectos">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        at incidunt eveniet. Animi molestias, mollitia rem recusandae nobis odio
        aspernatur provident omnis totam quod, unde quos? Quis placeat amet
        tempore.
      </Row>

      <Row className="mt-3" id="contacto">
        <Col>
          <h3>Contacto</h3>
          <p>
            Si deseas contactarme para trabajar en un proyecto, colaborar en una
            idea o simplemente saludar, no dudes en escribirme a mi correo
            electrónico.
          </p>
          <Button variant="primary" href="mailto:esteban.lepe1c@gmail.com">
            Enviar Correo
          </Button>
        </Col>
      </Row>
    </>
  );
}
