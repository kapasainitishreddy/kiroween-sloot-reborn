# Tech Stack

- Frontend: Next.js 15+ (App Router), TypeScript, Tailwind CSS
- Compression demo: Start with client-side simulation. Later swap in a tiny VAE or call a lightweight generative endpoint.
- Reconstruction: Show original vs reconstructed side-by-side. Prefer perceptual quality language over pure pixel metrics.
- Deployment: Vercel

**Constraints**:
- Always show original vs reconstructed.
- Cite the Sloot story and modern diffusion/VAE research in the UI.
- Keep the demo reliable (no heavy model download required for basic experience).
