"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashLoader() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Wait for exit animation to complete before removing from DOM
            setTimeout(() => setShouldRender(false), 1000);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
            <div className="relative flex flex-col items-center gap-6">
                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1.2, ease: "easeOut" }
                    }}
                    className="relative w-40 h-40 md:w-56 md:h-56"
                >
                    <Image
                        src="/images/no bg.png"
                        alt="BT Recording Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Company Name Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.8, duration: 1, ease: "easeOut" }
                    }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-2xl md:text-3xl font-serif tracking-[0.3em] uppercase text-white">
                        Recording
                    </span>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                        className="h-[1px] bg-white/30 mt-2"
                    />
                </motion.div>
            </div>

            {/* Subtle background ambient animation */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
            />
        </motion.div>
    );
}
