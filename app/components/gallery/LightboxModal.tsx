"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
    id: string;
    src: string;
    title: string;
    category: "wedding" | "portrait" | "events";
}

interface LightboxModalProps {
    selectedPhotoIndex: number | null;
    photos: Photo[];
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

export default function LightboxModal({
    selectedPhotoIndex,
    photos,
    onClose,
    onNext,
    onPrevious,
}: LightboxModalProps) {
    if (selectedPhotoIndex === null) return null;

    const currentPhoto = photos[selectedPhotoIndex];

    return (
        <AnimatePresence>
            {selectedPhotoIndex !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-10 right-10 z-[110] p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={onPrevious}
                        className="absolute left-4 md:left-10 z-[110] p-4 text-white hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-4 md:right-10 z-[110] p-4 text-white hover:text-foreground transition-colors"
                    >
                        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    {/* Main Image */}
                    <motion.div
                        key={selectedPhotoIndex}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            const swipeThreshold = 50;
                            if (info.offset.x > swipeThreshold) {
                                onPrevious();
                            } else if (info.offset.x < -swipeThreshold) {
                                onNext();
                            }
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
                    >
                        <Image
                            src={currentPhoto.src}
                            alt={currentPhoto.title}
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute bottom-[-60px] text-center space-y-2">
                            <h3 className="text-2xl font-serif text-white italic">{currentPhoto.title}</h3>
                            <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">{currentPhoto.category}</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
