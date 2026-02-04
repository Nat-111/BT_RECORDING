"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-32 bg-muted text-foreground relative overflow-hidden border-y border-white/5">
            {/* Decorative text background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <span className="text-[12rem] md:text-[20rem] font-serif whitespace-nowrap">BT REC</span>
            </div>

            <div className="max-width-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                            Ready to Capture <br /> <span className="italic">Your Story?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                            Spaces fill up quickly. Book your session today to ensure your vision is captured with the artistry it deserves.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="/booking"
                            className="group flex items-center gap-3 bg-foreground text-background px-12 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                        >
                            📸 Book a Session
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
