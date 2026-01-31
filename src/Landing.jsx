import { motion } from "framer-motion";
import kitty from "../src/assets/kitty.png";


export default function Landing() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 to-rose-50 px-4 text-center">

      {/* Kitty / Avatar */}
      <motion.img
        src={kitty}
        alt="cute kitty"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-52 drop-shadow-xl animate-float"
      />

      {/* Text */}
      <motion.h1
        className="mt-6 text-3xl font-semibold text-rose-600 sm:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Hey Babyy… 💗
      </motion.h1>

      <motion.p
        className="mt-2 max-w-xs text-lg text-rose-500 sm:max-w-md sm:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Avinassh here asking you for Valentine 💌
      </motion.p>

      {/* Floating hearts */}
      {Array.from({ length: 10 }).map((_, i) => (
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
          style={{ left: `${8 + i * 8}%`, bottom: "20px" }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
