// Base URL for the gallery images.
// By default, it falls back to the local `/images` directory so your app remains functional.
// You can set the NEXT_PUBLIC_R2_URL environment variable or replace the fallback string below
// with your Cloudflare R2 public URL (e.g., "https://pub-xxxxxxxxxxxxxx.r2.dev").
const ASSETS_BASE_URL = process.env.NEXT_PUBLIC_R2_URL || "https://pub-5cdbdc902b0a49d0a04fc506feaf64c7.r2.dev/sp";

export const siteConfig = {
  friendName: "Shanmu",
  birthDate: "2026-05-23",
  welcomeMessage: "Happy Birthday to My Forever & Always! 🎂",
  musicUrl: "/audio/bgm.mp3",
  questions: [
    {
      question: "Which day did the world become 100% brighter?",
      answer: "23 May",
      retryMessage: "Think of your own special day! 🎈"
    },
    {
      question: "What is the most beautiful thing I've ever seen? (Hint: Mirror)",
      answer: "You",
      retryMessage: "Look in the mirror and you'll find the answer! 💖"
    },
    {
      question: "What was the first movie we watched together?",
      answer: "Sandakozhi2",
      retryMessage: "Remember that night? Vishal and Keerthi Suresh... 🎬"
    },
    {
      question: "Where was the first place we said 'I Love You'?",
      answer: "Vietnam",
      retryMessage: "The land of love and beautiful memories! 🌏"
    },
    {
      question: "How many more years do I want to spend with you?",
      answer: "Forever",
      retryMessage: "A lifetime isn't enough! ♾️"
    }
  ],
  gallery: [
    { url: `${ASSETS_BASE_URL}/image5.webp`, caption: "Making every moment count. ⏳" },
    { url: `${ASSETS_BASE_URL}/image14.webp`, caption: "Captured moments, eternal love. 📸" },
    { url: `${ASSETS_BASE_URL}/image2.webp`, caption: "Your smile, my favorite view. ✨" },
    { url: `${ASSETS_BASE_URL}/image4.webp`, caption: "Hand in hand, always. 🤝" },
    { url: `${ASSETS_BASE_URL}/image6.webp`, caption: "My favorite birthday girl. 🎂" },
    { url: `${ASSETS_BASE_URL}/image1.webp`, caption: "The day our hearts became one ❤️" },
    { url: `${ASSETS_BASE_URL}/image10.webp`, caption: "The light of my life ☀️" },
    { url: `${ASSETS_BASE_URL}/image3.webp`, caption: "A year full of laughter with you 😊" },
    { url: `${ASSETS_BASE_URL}/image8.webp`, caption: "Another year of choosing you 🌹" },
    { url: `${ASSETS_BASE_URL}/image7.webp`, caption: "Pure happiness in your arms 💖" },
    { url: `${ASSETS_BASE_URL}/image9.webp`, caption: "Dreaming of our future together 🌠" },
    { url: `${ASSETS_BASE_URL}/image12.webp`, caption: "To many more adventures 🌏" },
    { url: `${ASSETS_BASE_URL}/image13.webp`, caption: "Our love story is my favorite 📖" },
    { url: `${ASSETS_BASE_URL}/image11.webp`, caption: "Forever isn't long enough ♾️" },
    { url: `${ASSETS_BASE_URL}/image15.webp`, caption: "You are my sunshine 🌻" },
    { url: `${ASSETS_BASE_URL}/image16.webp`, caption: "Soulmates forever 💕" },
    { url: `${ASSETS_BASE_URL}/image17.webp`, caption: "The best gift I've ever received 🎁" },
    { url: `${ASSETS_BASE_URL}/image18.webp`, caption: "Every second is precious with you ⏱️" },
    { url: `${ASSETS_BASE_URL}/image19.webp`, caption: "Happy Birthday, My Everything! 🎊" }
  ],
  personalMessage: `To my dearest love, on your special day. Every moment spent with you is a gift I cherish more than words can say. You've brought so much light, laughter, and love into my life over the past years. As you celebrate another trip around the sun, I want you to know that you are my sun, my moon, and all my stars. Here's to a lifetime of more birthdays, more adventures, and more love. Happy Birthday, my everything! ❤️`,
  surpriseVideoId: "dQw4w9WgXcQ",
  whatsappNumber: "919677909533",
};
