import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function About() {

   return (
      <Container className="mt-5 pt-5">
         <Row>
            <Col>
               <h1>High-Low Card Game</h1>
               <p>You will be shown two cards, one which you can see and the other which is hidden.
                  <br />You have to guess whether the hidden card is higher or lower than the one shown.
                  <br />Aces high!</p>
            </Col>
            </Row>
            <Row>
            <Col>
            <Link to="/play"><button className="guess-button higher-button">Play Game</button></Link>
            </Col>
         </Row>
      </Container>
   );
}
