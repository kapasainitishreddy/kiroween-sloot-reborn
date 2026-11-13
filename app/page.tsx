'use client';

import { useState } from 'react';

export default function Home() {
  const [seed, setSeed] = useState('');
  const [ratio, setRatio] = useState<number | null>(null);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [reconstructed, setReconstructed] = useState(false);

  const simulateCompression = () => {
    // Placeholder simulation of extreme generative compression
    const fakeSeed = Math.random().toString(36).slice(2, 12);
    const orig = Math.floor(Math.random() * 500000 + 200000); // ~200-700 KB fake
    const compressed = fakeSeed.length + 32; // tiny seed + metadata
    setSeed(fakeSeed);
    setOriginalSize(orig);
    setRatio(Math.round(orig / compressed));
    setReconstructed(true);
  };

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-8">
      <h1 className="text-4xl mb-2">Sloot Reborn</h1>
      <p className="mb-6 text-green-300 text-sm">
        Neural generative revival of the mythical Sloot Digital Coding System.<br />
        Encode keyframes/semantics → reconstruct via diffusion-style prior.
      </p>

      <button
        onClick={simulateCompression}
        className="border border-green-500 px-6 py-2 hover:bg-green-900"
      >
        Generate Tiny Seed
      </button>

      {seed && originalSize && (
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="border border-green-700 p-4">
            <p className="text-green-500 mb-2">Original</p>
            <div className="h-32 bg-green-950 flex items-center justify-center text-xs">
              [Source Frame]
            </div>
            <p className="mt-2 text-sm">{(originalSize / 1024).toFixed(1)} KB</p>
          </div>
          <div className="border border-green-700 p-4">
            <p className="text-green-500 mb-2">Reconstructed</p>
            <div className="h-32 bg-green-900 flex items-center justify-center text-xs">
              {reconstructed ? '[Generated from Seed]' : '...'}
            </div>
            <p className="mt-2 text-sm">Seed: {seed}</p>
          </div>
        </div>
      )}

      {ratio && (
        <div className="mt-6 border border-green-600 p-4">
          <p>Compression ratio: ~{ratio}:1</p>
          <p className="text-sm text-green-600 mt-1">
            Demo simulation. Real path: keyframe encode → conditional diffusion/VAE reconstruction.
          </p>
        </div>
      )}

      <footer className="mt-16 text-xs text-green-700">
        Kiroween 2026 • Resurrection • Mix: Sloot + modern neural compression<br />
        Inspired by recent extreme video compression with diffusion models (e.g. 0.02 bpp regime)
      </footer>
    </main>
  );
}
