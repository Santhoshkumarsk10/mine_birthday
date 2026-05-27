# 🎂 Premium Birthday Surprise Website

A beautiful, emotional, and interactive birthday surprise website built with Next.js, Framer Motion, and Tailwind CSS. Designed to create a magical journey for someone special.

## ✨ Features

- **Cinematic Experience**: A smooth, guided journey from a magical welcome screen to a grand finale.
- **Interactive Quiz**: Engagement through personalized questions about shared memories.
- **Dynamic Gallery**: A "All About You" gallery featuring 19 cherished moments with custom captions.
- **Emotional Message**: A heartfelt birthday letter with a typing effect for an intimate feel.
- **Grand Reveal**: Final surprise with a celebratory video, music, and synchronized confetti bursts.
- **Rich Visuals**: Rose-gold dark theme, floating animations, and magical particle backgrounds (hearts & stars).
- **Fully Responsive**: Optimized for all devices (Mobile, Tablet, and Desktop).

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Particles**: [tsParticles](https://particles.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Confetti**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Outfit, Playfair Display, Dancing Script)

## 🛠️ Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the project.

### 3. Customization
Update `src/config/site.ts` to personalize the experience:
- Change the `friendName` and `birthDate`.
- Update `questions` with your own memories.
- Add your own images to `public/images` and update the `gallery` array.
- Write your own heartfelt `personalMessage`.

## 🌍 Deployment

This project is optimized for **Cloudflare Pages** (Static HTML Export).

### Build
```bash
npm run build
```
The static files will be generated in the `out` directory.

### Quick Deploy to Cloudflare
1. Connect your GitHub repo to Cloudflare Pages.
2. Select **Framework preset**: `Next.js (Static HTML export)`.
3. Set **Build command**: `npm run build`.
4. Set **Build output directory**: `out`.

## ❤️ Credits
Developed by **Santhoshkumar B**  
Made with love for Shanmu.
