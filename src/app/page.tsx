import GameCanvas from './components/GameCanvas';
import GameUI from './components/GameUI';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <div className="relative w-full max-w-6xl aspect-video">
        <GameCanvas />
        <GameUI />
      </div>
    </main>
  );
}
