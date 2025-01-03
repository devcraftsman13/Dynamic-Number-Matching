// src/components/GameBoard.tsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import { useMaxNumber } from '../MaxNumberContext';

const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [turns, setTurns] = useState(0);
	const [loading, setLoading] = useState(false);

	const { maxNumber, setMaxNumber } = useMaxNumber();

  useEffect(() => {
    if (maxNumber > 0) {
      const generateCards = () => {
				setLoading(true)
        let cardArray: number[] = [];
        for (let i = 1; i <= maxNumber; i++) {
          cardArray.push(i, i);
        }
        cardArray = cardArray.sort(() => Math.random() - 0.5);
        setCards(cardArray);
        setMatchedCards([]);
        setFlippedCards([]);
        setTurns(0);
				setLoading(false)
      };
      generateCards();
    }
  }, [maxNumber]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(id) || matchedCards.includes(id)) {
      return;
    }

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTurns(turns + 1);
      setTimeout(() => {
        if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
          setMatchedCards([...matchedCards, ...newFlippedCards]);
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
		setMaxNumber(0);
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setTurns(0);
  };

  return (
    <div className="text-center">
			{
				maxNumber > 0 ? (
					<>
						<ScoreBoard turns={turns} resetGame={resetGame} matchedCards={matchedCards} totalCards={cards.length / 2} />
						{loading ? (
							<p className="text-gray-600">Loading...</p> 
						) : (
							<div className="grid grid-cols-4 gap-4 justify-center mt-4">
								{cards.map((value, index) => (
									<Card
										key={index}
										id={index}
										value={value}
										isRevealed={flippedCards.includes(index) || matchedCards.includes(index)}
										isMatched={matchedCards.includes(index)}
										onClick={handleCardClick}
										className="animate-scale-up"
									/>
								))}
							</div>
						)}
					</>
				) : (
					<p className='text-gray-600 uppercase text-xl'>No Cards</p>
				)
			}
    </div>
  );
};

export default GameBoard;
