// src/components/InputForm.tsx
import React from 'react';
import { useMaxNumber } from '../MaxNumberContext';

const InputForm: React.FC = () => {
	const { maxNumber, setMaxNumber } = useMaxNumber();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxNumber(parseInt(e.target.value));
  };

  return (
    <div className="mb-6">
    	<label className="text-gray-700 text-sm font-bold mb-2 uppercase mr-3" htmlFor="maxnumber">
        enter max number:
      </label>
      <input
				id='maxnumber'
        type="number"
        min="1"
        max="10"
        placeholder="Max Number"
				value={maxNumber}
        onChange={handleInputChange}
        className="px-4 py-2 border rounded-lg min-w-44"
      />
    </div>
  );
};

export default InputForm;
