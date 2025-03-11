import { useState, useCallback, useEffect } from 'react';

interface Character {
  id: string;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  isJumping: boolean;
  specialAbility: string;
}

interface GameState {
  characters: Record<string, Character>;
  activeCharacter: string;
  score: number;
}

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    characters: {
      red: {
        id: 'red',
        x: 100,
        y: 100,
        velocityX: 0,
        velocityY: 0,
        isJumping: false,
        specialAbility: 'multiply',
      },
      blue: {
        id: 'blue',
        x: 200,
        y: 100,
        velocityX: 0,
        velocityY: 0,
        isJumping: false,
        specialAbility: 'fly',
      },
      // Add more characters with their initial positions and abilities
    },
    activeCharacter: 'red',
    score: 0,
  });

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const { key } = event;
    const character = gameState.characters[gameState.activeCharacter];

    setGameState((prev) => {
      const updatedCharacter = { ...character };

      switch (key.toLowerCase()) {
        case 'w':
          if (!updatedCharacter.isJumping) {
            updatedCharacter.velocityY = -10;
            updatedCharacter.isJumping = true;
          }
          break;
        case 'a':
          updatedCharacter.velocityX = -5;
          break;
        case 'd':
          updatedCharacter.velocityX = 5;
          break;
        case 's':
          // Implement crouch or special down action
          break;
        case ' ':
          // Implement special ability
          break;
      }

      return {
        ...prev,
        characters: {
          ...prev.characters,
          [gameState.activeCharacter]: updatedCharacter,
        },
      };
    });
  }, [gameState]);

  const updateGameState = useCallback(() => {
    setGameState((prev) => {
      const updatedCharacters = { ...prev.characters };

      // Update each character's position and physics
      Object.keys(updatedCharacters).forEach((charId) => {
        const char = updatedCharacters[charId];

        // Apply gravity
        char.velocityY += 0.5;

        // Update position
        char.x += char.velocityX;
        char.y += char.velocityY;

        // Ground collision
        if (char.y > 400) {
          char.y = 400;
          char.velocityY = 0;
          char.isJumping = false;
        }

        // Apply friction
        char.velocityX *= 0.9;
      });

      return {
        ...prev,
        characters: updatedCharacters,
      };
    });
  }, []);

  // Set up keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return {
    gameState,
    updateGameState,
  };
}; 