import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-t-4 border-blue-500"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0,
        }}
        initial={{
          rotate: 0,
        }}
        style={{
          borderTopColor: "#3B82F6",
          borderRightColor: "#93C5FD",
          borderBottomColor: "#DBEAFE",
          borderLeftColor: "#DBEAFE",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
