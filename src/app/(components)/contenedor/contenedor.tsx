import { Container } from "react-bootstrap";
import styles from "./contenedor.module.css";

type ContenedorProps = {
  children: React.ReactNode;
};

const ContenedorComponent: React.FC<ContenedorProps> = ({ children }) => {
  return (
    <Container fluid className={styles["fondo-redondendo"]}>
      <div className="mt-3">{children}</div>
    </Container>
  );
};

export default ContenedorComponent;
