"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-col items-center justify-center -z-20 gap-4 px-4">
      <div className="w-full flex items-center justify-center z-[20]">
        <div
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          security
        </div>
      </div>

      <div className="flex flex-col items-center justify-center z-[20]">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            style={{ width: "auto", height: "auto" }}
            className="z-10"
          />
        </div>
        <motion.p
          variants={slideInFromTop}
          className="text-lg text-wrap text-gray-200 my-5 max-w-[600px] text-center"
        >
          Speed and security go hand in hand. I build high-performance applications optimized for speed, scalability, and seamless user experience, leveraging efficient code, caching, and CDN strategies. Security is a top priority—I implement encryption, secure authentication, and best practices to protect data, prevent vulnerabilities, and ensure system integrity.
        </motion.p>

        <div className="Welcome-box px-[15px] py-[4px] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <p className="Welcome-text text-[12px]">Encryption</p>
        </div>
      </div>

      <div className="">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.mp4" type="video/mp4" />
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
