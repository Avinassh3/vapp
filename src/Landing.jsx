import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import kitty from "../src/assets/kitty.jpg";

// 👉 Replace these with your real photos
import pic1 from "../src/assets/memories/1.jpg";
import pic2 from "../src/assets/memories/2.jpg";
import pic3 from "../src/assets/memories/3.jpg";
import pic4 from "../src/assets/memories/4.jpg";
import pic5 from "../src/assets/memories/5.jpg";

const memories = [pic1, pic2, pic3, pic4, pic5];

const maybeTexts = [
  "Okay… but look at us 🥺",
  "This was a really good day 💗",
  "We do look cute together, no? 😌",
  "One more memory before you decide 💫",
  "Okay… I’ll ask one last time 💖",
];

export default function Landing() {
  const [step, setStep] = useState(1);
  const [photoIndex, setPhotoIndex] = useState(0);

  // reset memory index
  useEffect(() => {
    if (step !== "maybe") setPhotoIndex(0);
  }, [step]);

  // -------- OPTIMIZED CONSTANT HEARTS (RUN ONCE) --------


const hearts = useMemo(() => {
  const isMobile = window.innerWidth < 640;
  const count = isMobile ? 14 : 26;

  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    size: Math.random() * 10 + 14,
    duration: Math.random() * 6 + 8,
    delay: Math.random() * 5,
    emoji: Math.random() > 0.5 ? "❤️" : "💖",
  }));
}, []);

  // -----------------------------------------------------

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 to-rose-50 px-4 text-center">

      {/* -------- CONSTANT BACKGROUND HEARTS (FIXED) -------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute select-none will-change-transform"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
            }}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </div>
      {/* --------------------------------------------------- */}

      {/* ---------------- STEP 1 : LANDING ---------------- */}
      {step === 1 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full blur-2xl bg-pink-200 opacity-60"></div>

            <motion.img
              src={kitty}
              alt="cute kitty"
              className="relative w-52 rounded-3xl object-cover drop-shadow-xl kitty-mask"
              animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          <h1 className="mt-6 text-3xl font-semibold text-rose-600 sm:text-4xl">
            Hey Babyy… 💗
          </h1>

          <button
            onClick={() => setStep(2)}
            className="mt-8 rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
          >
            Continue 💖
          </button>
        </>
      )}

      {/* ---------------- STEP 2 : ASK ---------------- */}
      {step === 2 && (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-rose-600">
            Will you be my Valentine? 💘
          </h2>

          <div className="mt-10 flex gap-6">
            <button
              onClick={() => setStep(3)}
              className="rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
            >
              YES 💖
            </button>

            <button
              onClick={() => setStep("maybe")}
              className="rounded-full bg-gray-200 px-6 py-2 text-gray-700"
            >
              Hmm… maybe 😌
            </button>
          </div>
        </div>
      )}

      {/* ---------------- STEP MAYBE : MEMORIES ---------------- */}
      {step === "maybe" && (
        <div className="flex flex-col items-center text-center">
          <motion.div
            key={photoIndex}
            className="relative mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl bg-pink-200 opacity-60"></div>

            <motion.img
              src={memories[photoIndex]}
              alt="memory"
              className="relative w-64 rounded-3xl object-cover shadow-xl sm:w-72 kitty-mask"
              animate={{ y: [0, -6, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          <p className="mb-6 max-w-xs text-lg text-rose-500">
            {maybeTexts[photoIndex]}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(3)}
              className="rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
            >
            YESSSS 💖
            </button>

            {photoIndex < memories.length - 1 && (
              <button
                onClick={() => setPhotoIndex(photoIndex + 1)}
                className="rounded-full bg-gray-200 px-6 py-2 text-gray-700"
              >
                Still thinking 😅
              </button>
            )}
          </div>
        </div>
      )}

      {/* ---------------- STEP 3 : YES (UNCHANGED LOGIC) ---------------- */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col items-center justify-center text-center"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-pink-300 blur-3xl opacity-40"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          <motion.h1
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="relative z-10 text-5xl font-extrabold text-rose-600 sm:text-6xl"
          >
            YAAYY 💖💖💖
          </motion.h1>
          <p className="relative z-10 mt-4 max-w-md text-lg text-rose-500">
  Thank you for saying yes, babyy 💖  
  You’ve made me so happy today.  
  I can’t wait to laugh, love,  
  and make beautiful memories together this Valentine’s.
</p>
        </motion.div>
      )}
    </div>
  );
}
