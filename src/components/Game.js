import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { faLevelUpAlt, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const deck = [];

for (let value of values) {
   for (let suit of suits) {
      //deck.push(`${values[value]} of ${suits[suit]}`);
      deck.push({ suit: suit, value: value });
   }
}

export default function Game() {
   const [cards, setCardDeck] = useState(
      [...deck].sort(() => Math.random() - 0.5)
   );
   const [drawnCards, setDrawnCards] = useState([]);

   const [points, setPoints] = useState(0);
   const makeGuess = (guess) => {
      if (deck.indexOf(drawnCards[0]) <= deck.indexOf(drawnCards[1]) && guess === "lower") {
         console.log("You win!");
         setPoints(points + 1);
         draw();
      } else if (
         deck.indexOf(drawnCards[0]) >= deck.indexOf(drawnCards[1]) &&
         guess === "higher"
      ) {
         console.log("You win!");
         setPoints(points + 1);
         draw();
      } else {
         setPoints(0);
         setCardDeck([...deck].sort(() => Math.random() - 0.5));
         firstDraw();
      }
   };

   const firstDraw = () => {
      setDrawnCards((drawnCards) => [
         cards[cards.length - 1],
         cards[cards.length - 2]
      ]);
      setCardDeck((cards) => cards.slice(0, cards.length - 2));
   };

   const draw = () => {
      let tempCards = [];
      tempCards[1] = drawnCards[0];
      tempCards[0] = cards[cards.length - 1];
      setCardDeck((cards) => cards.slice(0, cards.length - 1));
      setDrawnCards(tempCards);
   };

   // useEffect error:
   // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
   useEffect(() => {
      firstDraw();
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <Container className="mt-5 p-5">
         <Row>
            <h1>Higher or Lower?</h1>
            <p className="align-center">Guess if the next card is higher or lower! Remember Ace is high. ^_^</p>
            {/* <p>{cards.length}</p> */}

            <p className="align-center drawn"><strong> {drawnCards.length < 2 ? "" : drawnCards[1].value}{" of "}{drawnCards.length < 2 ? "" : drawnCards[1].suit} </strong></p>

            <p><button onClick={() => makeGuess("higher")} value="higher" className="guess-button higher-button button"><FontAwesomeIcon icon={faLevelUpAlt} /> Higher</button>{' '}
               <button onClick={() => makeGuess("lower")} value="lower" className="guess-button lower-button button">Lower <FontAwesomeIcon icon={faLevelDownAlt} /></button></p>
         </Row>

         <Row>
            <Col>
               <p>Your current streak is {points}!</p>
               <p>some img here</p>
            </Col>

            {/* <p>Hidden Card: (Test): {drawnCards.length < 2 ? "" : drawnCards[0].value}{" "}{drawnCards.length < 2 ? "" : drawnCards[0].suit}</p> */}
         </Row>
      </Container>
   );
}
