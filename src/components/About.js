import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function About() {

   return (
      <Container className="mt-5 p-5">
         <Row>
            <Col>
               <h1>About HiLo</h1>
               <p>Guess if the hidden card is higher or lower.<br />
                  Ace is high.<br />
                  See if you can get through the whole deck!<br />
                  There is a special prize if you reach the end! ;)</p>
            </Col>
         </Row>
            <Row>
               <Col>
                  <Link to="/play"><button className="button guess-button play-button">Play Game</button></Link>
               </Col>
            </Row>
      </Container>
         );
}
