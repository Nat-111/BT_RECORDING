"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
    return (
        <section className="mt-32 py-24 bg-muted/10 border border-white/5 rounded-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-width-container relative z-10 text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-serif">A Bespoke <span className="italic">Vision</span></h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                        Not seeing exactly what you need? We specialize in custom commissions and experimental projects. Let&apos;s discuss your unique requirements.
                    </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/booking"
                        className="group flex items-center gap-3 bg-foreground text-background px-10 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-all"
                    >
                        Start a Commission
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/booking"
                        className="text-sm uppercase tracking-widest border-b border-white/10 pb-1 text-muted-foreground hover:text-white hover:border-white transition-all"
                    >
                        Request Custom Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}
