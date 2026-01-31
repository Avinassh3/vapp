import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [step, setStep] = useState(1); // 1 = landing, 2 = ask, "maybe", 3 = yes
  const [photoIndex, setPhotoIndex] = useState(0);

  // reset memories if user goes back
  useEffect(() => {
    if (step !== "maybe") setPhotoIndex(0);
  }, [step]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 to-rose-50 px-4 text-center">

      {/* ---------------- STEP 1 : LANDING ---------------- */}
      {step === 1 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full blur-2xl bg-pink-200 opacity-60"></div>

            <motion.img
              src={kitty}
              alt="cute kitty"
              className="relative w-52 rounded-3xl object-cover drop-shadow-xl kitty-mask"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, -1, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.h1
            className="mt-6 text-3xl font-semibold text-rose-600 sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hey Babyy… 💗
          </motion.h1>

          <motion.button
            onClick={() => setStep(2)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
          >
            Continue 💖
          </motion.button>
        </>
      )}

      {/* ---------------- STEP 2 : ASK ---------------- */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl font-semibold text-rose-600">
            Will you be my Valentine? 💘
          </h2>

          <div className="mt-10 flex gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(3)}
              className="rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
            >
              YES 💖
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep("maybe")}
              className="rounded-full bg-gray-200 px-6 py-2 text-gray-700"
            >
              Hmm… maybe 😌
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* ---------------- STEP MAYBE : MEMORIES ---------------- */}
      {step === "maybe" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center"
        >
<motion.div
  key={photoIndex}
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative mb-6"
>
  {/* soft glow */}
  <div className="absolute inset-0 rounded-3xl blur-2xl bg-pink-200 opacity-60"></div>

  <motion.img
    src={memories[photoIndex]}
    alt="memory"
    className="relative w-64 rounded-3xl object-cover shadow-xl sm:w-72 kitty-mask"
    animate={{
      y: [0, -6, 0],
      scale: [1, 1.015, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

          <p className="mb-6 max-w-xs text-lg text-rose-500">
            {maybeTexts[photoIndex]}
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setStep(3)}
              className="rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
            >
              YES 💖
            </motion.button>

            {photoIndex < memories.length - 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setPhotoIndex(photoIndex + 1)}
                className="rounded-full bg-gray-200 px-6 py-2 text-gray-700"
              >
                Still thinking 😅
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* ---------------- STEP 3 : YES ---------------- */}
{step === 3 && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative flex flex-col items-center justify-center text-center"
  >
    {/* Background glow pulse */}
    <motion.div
      className="absolute inset-0 rounded-full bg-pink-300 blur-3xl opacity-40"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />

    {/* Main excited text */}
    <motion.h1
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 12 }}
      className="relative z-10 text-5xl sm:text-6xl font-extrabold text-rose-600"
    >
      YAAAYYYY 💖💖💖
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative z-10 mt-4 max-w-md text-lg text-rose-500"
    >
      You just made my heart do backflips 😭💘  
      Best YES ever.
    </motion.p>

    {/* Confetti + hearts burst */}
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="pointer-events-none absolute z-0 select-none"
        initial={{
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        style={{
          fontSize: `${Math.random() * 18 + 16}px`,
        }}
      >
        {Math.random() > 0.5 ? "💖" : "🎉"}
      </motion.div>
    ))}
  </motion.div>
)}


      {/* ---------------- FULL SCREEN FLOATING HEARTS ---------------- */}
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() * 14 + 16;
        const duration = Math.random() * 6 + 6;
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="pointer-events-none absolute select-none"
            style={{ left: `${left}%`, fontSize: `${size}px` }}
            initial={{ top: "110%", opacity: 0 }}
            animate={{ top: "-20%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>
        );
      })}
    </div>
  );
}
