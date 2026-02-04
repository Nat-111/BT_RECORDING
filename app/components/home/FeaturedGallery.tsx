"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const photos = [
    { id: "1", src: "/images/Blantyne-89.jpg (1).jpeg", title: "Wedding Portrait", category: "portrait" },
    { id: "2", src: "/images/Blantyne-29.jpg.jpeg", title: "Corporate Event", category: "events" },
    { id: "3", src: "/images/FY7A9847.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
];

export default function FeaturedGallery() {
    return (
        <section className="py-32 bg-background">
            <div className="max-width-container">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <span className="text-foreground/60 uppercase tracking-widest text-[10px] md:text-xs font-semibold">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-serif max-w-2xl">A Glimpse into the <span className="italic">Frame</span></h2>
                    <Link
                        href="/gallery"
                        className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors pt-2"
                    >
                        Explore Full Gallery
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative aspect-[4/5] overflow-hidden bg-muted"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-white/70 text-[10px] uppercase tracking-widest mb-2">{photo.category}</span>
                                <h3 className="text-xl font-serif text-white">{photo.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
