import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {

   return (
      <Container className="mt-5 p-5">
         <Row>
            <Col>
               <h1>HiLo Card Game</h1>
               <p>How good is your RNG? High Low card game, bet you can’t get all 52 points loser.</p>
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
