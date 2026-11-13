# Sloot Reborn

Resurrection entry for Kiroween 2026.  
Modern generative reconstruction of the mythical Sloot Digital Coding System idea (tiny key → full media).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How to continue

1. **Real upload**  
   Add `<input type="file" accept="image/*">`. Draw the original on a canvas. Generate a tiny seed (hash or simple feature vector) and show a reconstructed version beside it.

2. **Reconstruction visualization**  
   For the demo, a simple pixel-downsample + upscale or a tiny autoencoder is enough. Later swap in a real VAE or diffusion call.

3. **Metrics**  
   Show original size, seed size, ratio, and a short perceptual note.

4. **Kiro usage**  
   Expand `specs/compression-pipeline/` with design.md and tasks.md.  
   Add steering notes about always showing side-by-side comparison.

5. **Historical context**  
   Keep the Sloot story and a citation to modern extreme compression papers (0.02 bpp regime) visible in the UI.

## Current status

- Seed generation simulation
- Side-by-side original / reconstructed placeholders
- Ratio display
- Requirements spec

Next recommended step: real image upload + canvas comparison.
