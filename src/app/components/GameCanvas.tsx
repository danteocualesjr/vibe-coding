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
    // Draw stick figures and their animations
  };

  const drawEnvironment = (ctx: CanvasRenderingContext2D) => {
    // Draw background and interactive elements
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