// src/components/Card.tsx
import React from 'react';

interface CardProps {
  id: number;
  value: number;
  onClick: (id: number) => void;
  isRevealed: boolean;
  isMatched: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ id, value, onClick, isRevealed, isMatched, className}) => {
  return (
		<div
			className={`w-20 h-20 m-2 flex items-center justify-center bg-gray-200 rounded-lg shadow-lg cursor-pointer transition-transform transform duration-350 ease-in hover:scale-110 hover:shadow-xl hover: ${isRevealed || isMatched ? 'bg-white' : ''} ${className}`}
			onClick={() => onClick(id)}
		>
			{isRevealed || isMatched ? <span>{value}</span> : null}
		</div>
  );
};

export default Card;
