# Tech Stack

- Frontend: Next.js 15+ (App Router), TypeScript, Tailwind CSS
- Backend / ML: FastAPI (Python) or Next.js route handlers + PyTorch / Hugging Face
- Models: Start with a small VAE or open neural codec (CompressAI, OneDC-style, or simple autoencoder). Keep inference latency reasonable.
- Deployment: Vercel (web) + Railway or Fly (if separate Python API)

**Constraints**:
- Always show original vs reconstructed side-by-side.
- Prefer perceptual quality over pure pixel metrics when possible.
- Cite the Sloot story in the UI.
