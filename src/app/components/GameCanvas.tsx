'use client';

import { useEffect, useRef } from 'react';
import { useGameState } from '../hooks/useGameState';

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { gameState, updateGameState } = useGameState();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    // Initial size setup
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Game loop
    let animationFrameId: number;

    const render = () => {
      // Clear canvas
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw game elements
      drawCharacters(ctx);
      drawEnvironment(ctx);

      // Update game state
      updateGameState();

      // Continue game loop
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [updateGameState]);

  const drawCharacters = (ctx: CanvasRenderingContext2D) => {
    Object.values(gameState.characters).forEach((char) => {
      // Save context state
      ctx.save();
      
      // Set character color
      ctx.strokeStyle = char.id;
      ctx.lineWidth = 2;
      
      // Draw stick figure
      ctx.beginPath();
      
      // Head
      ctx.arc(char.x, char.y - 20, 10, 0, Math.PI * 2);
      
      // Body
      ctx.moveTo(char.x, char.y - 10);
      ctx.lineTo(char.x, char.y + 20);
      
      // Arms
      ctx.moveTo(char.x - 15, char.y);
      ctx.lineTo(char.x + 15, char.y);
      
      // Legs
      ctx.moveTo(char.x, char.y + 20);
      ctx.lineTo(char.x - 10, char.y + 40);
      ctx.moveTo(char.x, char.y + 20);
      ctx.lineTo(char.x + 10, char.y + 40);
      
      // Draw the figure
      ctx.stroke();
      
      // Restore context state
      ctx.restore();
    });
  };

  const drawEnvironment = (ctx: CanvasRenderingContext2D) => {
    // Draw ground
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 450, ctx.canvas.width, 5);
    
    // Draw background elements
    ctx.fillStyle = '#222';
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * 400;
      const size = Math.random() * 20 + 10;
      ctx.fillRect(x, y, size, size);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default GameCanvas; 