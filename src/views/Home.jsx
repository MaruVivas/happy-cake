import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6 className="pt-3"> El lugar de los pasteles felices</h6>
      <img className="cake-img" src="https://www.emoji.co.uk/files/google-emojis/food-drink-android/7592-birthday-cake.png"></img>
    </Container>
  );
};