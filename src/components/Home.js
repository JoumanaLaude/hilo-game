import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import cards from '../images/card-gif.gif';

export default function Home() {

   return (
      <Container className="mt-5 p-5">
         <Row>
            <h1>HiLo Card Game</h1>
            <Col>
               <p>How good is your RNG? High Low card game, bet you can’t get all 52 points loser.</p>
               <p><img width="250" src={cards} alt="card gif" className="img-fluid rounded float-right" /></p>
            </Col>
         </Row>

         <Row>
            <Col>
               <Link to="/about"><button className="button guess-button play-button">Read Rules</button></Link>
            </Col>
         </Row>
      </Container>
   );
}
