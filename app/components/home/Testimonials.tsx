"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "BT Recording captured our wedding beautifully. Every photo tells a story, and the emotions came through perfectly. We couldn't have asked for better.",
        author: "Ama & Kwesi",
        location: "Accra, Ghana",
    },
    {
        quote: "Very professional and patient throughout the shoot. The photos were clean, modern, and exactly what I needed for my brand.",
        author: "Nana Yeboah",
        location: "Kumasi, Ghana",
    },
    {
        quote: "From the first conversation to the final delivery, everything was smooth. The quality of the images exceeded my expectations.",
        author: "James Nkansah",
        location: "Cape Coast, Ghana",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-width-container relative z-10">
                <div className="flex flex-col items-center text-center mb-20 space-y-4">
                    <Quote className="w-10 h-10 text-white/10" />
                    <h2 className="text-4xl md:text-5xl font-serif max-w-2xl mx-auto">
                        Experiences Shared <span className="italic">by Our Clients</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="space-y-6"
                        >
                            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed font-light">
                                "{item.quote}"
                            </p>
                            <div className="flex flex-col">
                                <span className="font-serif text-lg text-foreground">{item.author}</span>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
