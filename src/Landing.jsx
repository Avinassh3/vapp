import { motion } from "framer-motion";
import { useState } from "react";
import kitty from "../src/assets/kitty.jpg";

export default function Landing() {
  const [step, setStep] = useState(1);

  // random position for NO button
  const randomPos = () => ({
    top: Math.random() * 60 + "%",
    left: Math.random() * 60 + "%",
  });

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 to-rose-50 px-4 text-center">

      {/* STEP 1 */}
      {step === 1 && (
        <>
<motion.div
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="relative"
>
  {/* Soft glow behind */}
  <div className="absolute inset-0 rounded-full blur-2xl bg-pink-200 opacity-60"></div>

  {/* Kitty */}
  <motion.img
    src={kitty}
    alt="cute kitty"
    className="relative w-52 rounded-3xl object-cover 
               drop-shadow-[0_10px_30px_rgba(255,105,180,0.25)]
               kitty-mask"
    animate={{
      y: [0, -8, 0],
      rotate: [0, 0.8, -0.8, 0],
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(2)}
            className="mt-8 rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
          >
            Will you be my Valentine? 💝
          </motion.button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <motion.h2
            className="text-3xl font-semibold text-rose-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Sooo… what do you say? 😌
          </motion.h2>

          <div className="relative mt-10 flex h-60 w-full max-w-sm items-center justify-center">
            {/* YES */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(3)}
              className="z-10 rounded-full bg-green-500 px-8 py-3 text-lg font-semibold text-white shadow-lg"
            >
              YES 💖
            </motion.button>

            {/* NO */}
            <motion.button
              className="absolute rounded-full bg-gray-300 px-6 py-2 text-gray-700"
              onMouseEnter={(e) => {
                const pos = randomPos();
                e.target.style.top = pos.top;
                e.target.style.left = pos.left;
              }}
            >
              Let me think…
            </motion.button>
          </div>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <motion.h1
            className="text-4xl font-bold text-rose-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            YAYYY!!! 💖💖💖
          </motion.h1>

          <motion.p
            className="mt-4 max-w-md text-lg text-rose-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            You just made me the happiest person 😭💘  
            Can’t wait to celebrate Valentine’s with you.
          </motion.p>
        </>
      )}

{/* FULL SCREEN FLOATING HEARTS */}
{Array.from({ length: 40 }).map((_, i) => {
  const size = Math.random() * 14 + 16; // size variation
  const duration = Math.random() * 6 + 6; // speed variation
  const left = Math.random() * 100; // full width spread

  return (
    <motion.div
      key={i}
      className="pointer-events-none absolute select-none"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
      }}
      initial={{
        top: "110%",
        opacity: 0,
      }}
      animate={{
        top: "-20%",
        opacity: [0, 1, 1, 0],
      }}
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
