import { Container } from "react-bootstrap";

import Formulario from "../components/Formulario.jsx";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="mb-4 pt-5">¿En qué te podemos ayudar?</h1>
      <Formulario />
    </Container>
  );
};