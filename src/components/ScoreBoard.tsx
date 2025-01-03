// src/components/ScoreBoard.tsx
import React, { useEffect, useState } from 'react';

interface ScoreBoardProps {
  turns: number;
  resetGame: () => void;
  matchedCards: number[];
  totalCards: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ turns, resetGame, matchedCards, totalCards }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

	useEffect(() => {
		setModalOpen(matchedCards.length === totalCards * 2 && totalCards> 0);
	}, [matchedCards, totalCards]);

  return (
		<>
			<div className="mb-4 flex justify-between items-center mx-2">
				<button onClick={resetGame} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors ease-linear text-white rounded-lg">
					Reset Game
				</button>
				<p className='uppercase font-bold'>Turns:{turns}</p>
			</div>
			{
				(modalOpen) && (
					<div className="fixed w-full h-full bg-black bg-opacity-50 z-50 top-0 left-0 flex items-center justify-center">
						<div className="w-[400px] rounded-lg bg-white animate-scale-up py-10 px-5">
							<p className='font-bold text-2xl'>Congratulations!</p>
							<p className='text-xl mb-5'>You've completed the game in {turns} turns!</p>
							<button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors ease-linear text-white rounded-lg">
								Okay
							</button>
						</div>
					</div>
				)
			}
		</>
  );
};

export default ScoreBoard;
