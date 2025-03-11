'use client';

import { useState } from 'react';
import { useGameState } from '../hooks/useGameState';

const GameUI = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('red');
  const { gameState } = useGameState();

  const characters = [
    { id: 'red', name: 'Red', color: '#ff0000' },
    { id: 'blue', name: 'Blue', color: '#0000ff' },
    { id: 'green', name: 'Green', color: '#00ff00' },
    { id: 'yellow', name: 'Yellow', color: '#ffff00' },
    { id: 'purple', name: 'Purple', color: '#800080' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4">
      {/* Character Selection */}
      <div className="flex justify-center gap-4 mb-4">
        {characters.map((char) => (
          <button
            key={char.id}
            className={`w-12 h-12 rounded-full transition-transform ${
              selectedCharacter === char.id ? 'scale-110 ring-2 ring-white' : ''
            }`}
            style={{ backgroundColor: char.color }}
            onClick={() => setSelectedCharacter(char.id)}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
          <div className="text-white text-sm mb-2">Controls:</div>
          <div className="text-gray-300 text-xs">
            <div>WASD - Move</div>
            <div>SPACE - Jump/Special</div>
            <div>E - Interact</div>
            <div>Q - Switch Character</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameUI; 