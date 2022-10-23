
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Formulario() {
  return (
    <Form className="text-center">
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cuéntanos los detalles de tu pedido</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}