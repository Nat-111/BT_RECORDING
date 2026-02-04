"use client";

import { motion } from "framer-motion";

export default function BookingHero() {
    return (
        <div className="text-center mb-16 space-y-4">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-foreground/60 uppercase tracking-[0.3em] text-[10px] md:text-sm font-semibold"
            >
                Inquiry
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif"
            >
                Reserve Your <span className="italic">Perspective</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg font-light max-w-xl mx-auto"
            >
                Fill out the form below to start a conversation about your next visual project.
            </motion.p>
        </div>
    );
}
