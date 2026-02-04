"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface Photo {
    id: string;
    src: string;
    title: string;
    category: "wedding" | "portrait" | "events";
}

interface GalleryGridProps {
    photos: Photo[];
    onPhotoClick: (index: number) => void;
}

export default function GalleryGrid({ photos, onPhotoClick }: GalleryGridProps) {
    return (
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
                {photos.map((photo, index) => (
                    <motion.div
                        key={`${photo.id}-${index}`}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="group relative aspect-[4/5] bg-muted overflow-hidden cursor-crosshair"
                        onClick={() => onPhotoClick(index)}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="p-4 border border-white/20 rounded-full scale-75 group-hover:scale-100 transition-transform duration-500">
                                <Maximize2 className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-white/70 text-[10px] uppercase tracking-widest block mb-2">{photo.category}</span>
                            <h3 className="text-xl font-serif text-white">{photo.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
