import React, { useEffect, useState } from "react";
import { Card, Container, Col, Row } from "reactstrap";

const suits = ["of Clubs", "of Hearts", "of Diamonds", "of Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const deck = [];

for (let suit of suits) {
   for (let value of values) {
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
      if (drawnCards[0].value >= drawnCards[1].value && guess === "lower") {
         console.log("You win!");
         setPoints(points + 1);
         draw();
      } else if (
         drawnCards[0].value <= drawnCards[1].value &&
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

   useEffect(() => {
      firstDraw();
   }, []);

   return (
      <Container className="mt-5 pt-5">
         <Row>
            <h1>High-Low Card Game</h1>
            <p className="align-center">Guess if the next card is higher or lower.</p>
            {/* <p>{cards.length}</p> */}

            <p className="align-center">{drawnCards.length < 2 ? "" : drawnCards[1].value}{" "}{drawnCards.length < 2 ? "" : drawnCards[1].suit}</p>

            <p>
               <button onClick={() => makeGuess("higher")} value="higher" className="guess-button higher-button">Higher</button>{' '}
               <button onClick={() => makeGuess("lower")} value="lower" className="guess-button lower-button">Lower</button></p>
         </Row>

         <Row>
            <Col>
               <p>Your current streak is {points}!</p>
            </Col>

            {/* <p>Hidden Card: (Test): {drawnCards.length < 2 ? "" : drawnCards[0].value}{" "}{drawnCards.length < 2 ? "" : drawnCards[0].suit}</p> */}
         </Row>
      </Container>
   );
}
