import { motion } from "framer-motion";
import { useState } from "react";
import kitty from "../src/assets/kitty.png";

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
          <motion.img
            src={kitty}
            alt="cute kitty"
            className="w-52 drop-shadow-xl animate-float"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            className="mt-6 text-3xl font-semibold text-rose-600 sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hey Babyy… 💗
          </motion.h1>

          <motion.p
            className="mt-2 text-lg text-rose-500 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Avinassh here asking you for Valentine 💌
          </motion.p>

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

      {/* floating hearts */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute select-none text-xl text-pink-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 1, 1, 0], y: [-20 - i * 12] }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          style={{ left: `${5 + i * 7}%`, bottom: "10px" }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
