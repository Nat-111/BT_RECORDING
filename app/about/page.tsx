"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 overflow-hidden text-center">
                <div className="max-width-container flex flex-col items-center space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 z-10 max-w-3xl"
                    >
                        <span className="text-foreground/60 uppercase tracking-[0.3em] text-[10px] md:text-sm font-medium">The Artist Behind the Lens</span>
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-tight">
                            BT <br />
                            <span className="text-white italic">Recording</span>
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light mx-auto">
                            Blantyne Recording is a premier photography service specialising in the romance of weddings and the sophistication of corporate events.
                            With years of dedicated experience in the industry, we capture life’s most meaningful moments with passion and precision, from heartfelt “I do”s to major corporate milestones.
                            We create stunning, timeless images that truly tell your story.
                            We also offer professional live streaming for events and programmes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative aspect-[3/4] w-full max-w-sm group"
                    >
                        <div className="absolute inset-0 border border-white/10 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                        <Image
                            src="/images/Blantyne.jpg.jpeg"
                            alt="BT Recording Portrait"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-32 bg-muted/20">
                <div className="max-width-container px-6">
                    <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-serif">The Journey</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8 text-muted-foreground text-lg leading-relaxed font-light"
                        >
                            <p>
                                My fascination with light began on the streets of Accra Kokomlemle, where I spent my early years observing how shadows danced across buildings. This innate curiosity evolved into a career dedicated to capturing the human spirit through a refined, editorial lens.
                            </p>
                            <p>
                                With over a decade of experience in fashion and wedding photography, I have developed a style that is both minimal and deeply expressive. I believe that every photograph should be a quiet conversation between the subject, the artist, and the observer.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-width-container">
                    <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-20 h-px bg-white/20"
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif leading-tight italic"
                        >
                            "I don't just photograph what it looks like. I photograph what it feels like."
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-muted-foreground text-xl font-light"
                        >
                            My philosophy is simple: remain invisible so the moment can remain authentic. I seek the quiet intervals between the poses,the shared glance, the subtle breath, the fleeting vulnerability.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 border-t border-white/5">
                <div className="max-width-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif">Let's create something <br /> <span className="text-white italic">timeless.</span></h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                            <Link
                                href="/booking"
                                className="group flex items-center gap-3 bg-foreground text-background px-12 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-white/90 transition-all rounded-sm"
                            >
                                Book Your Session
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-sm uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors"
                            >
                                Browse the Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
