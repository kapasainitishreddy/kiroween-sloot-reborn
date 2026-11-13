'use client';

import { useState } from 'react';

export default function Home() {
  const [seed, setSeed] = useState('');
  const [ratio, setRatio] = useState<number | null>(null);

  const simulateCompression = () => {
    // Placeholder: real neural encoder would go here
    const fakeSeed = Math.random().toString(36).slice(2, 10);
    setSeed(fakeSeed);
    setRatio(Math.floor(Math.random() * 8000 + 2000)); // extreme demo ratio
  };

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-8">
      <h1 className="text-4xl mb-4">Sloot Reborn</h1>
      <p className="mb-6 text-green-300">
        Neural generative revival of the mythical Sloot Digital Coding System.<br />
        Mix of lost patent spirit + modern AI reconstruction.
      </p>

      <button
        onClick={simulateCompression}
        className="border border-green-500 px-6 py-2 hover:bg-green-900"
      >
        Generate Tiny Seed
      </button>

      {seed && (
        <div className="mt-8 border border-green-700 p-4">
          <p>Seed: <span className="text-white">{seed}</span></p>
          <p>Claimed ratio: ~{ratio}:1</p>
          <p className="mt-2 text-sm text-green-600">
            (Demo only — real VAE/neural codec comes next)
          </p>
        </div>
      )}

      <footer className="mt-16 text-xs text-green-700">
        Kiroween 2026 • Resurrection • Mix: Sloot + neural compression
      </footer>
    </main>
  );
}
