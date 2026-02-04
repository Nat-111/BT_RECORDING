"use client";

import { useState, useEffect, useCallback } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import LightboxModal from "../components/gallery/LightboxModal";

// Types
interface Photo {
    id: string;
    src: string;
    title: string;
    category: "wedding" | "portrait" | "events";
}

const photos: Photo[] = [
    { id: "1", src: "/images/Blantyne-89.jpg (1).jpeg", title: "Wedding Portrait", category: "portrait" },
    { id: "2", src: "/images/Blantyne-29.jpg.jpeg", title: "Corporate Event", category: "events" },
    { id: "3", src: "/images/FY7A9847.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
    { id: "4", src: "/images/Blantyne-208.jpg (1).jpeg", title: "Corporate Event", category: "events" },
    { id: "5", src: "/images/FY7A9646.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
    { id: "6", src: "/images/Blantyne-134.jpg.jpeg", title: "Church Event", category: "portrait" },
];

const categories = ["all", "wedding", "portrait", "events"] as const;

export default function GalleryPage() {
    const [filter, setFilter] = useState<typeof categories[number]>("all");
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    const filteredPhotos = filter === "all"
        ? photos
        : photos.filter(p => p.category === filter);

    // Modal Navigation
    const handlePrevious = useCallback(() => {
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
        }
    }, [selectedPhotoIndex, filteredPhotos.length]);

    const handleNext = useCallback(() => {
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
        }
    }, [selectedPhotoIndex, filteredPhotos.length]);

    const handleClose = () => setSelectedPhotoIndex(null);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedPhotoIndex === null) return;
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedPhotoIndex, handlePrevious, handleNext]);

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-width-container">
                <GalleryHero />

                <GalleryFilter
                    categories={categories}
                    filter={filter}
                    setFilter={setFilter}
                />

                <GalleryGrid
                    photos={filteredPhotos}
                    onPhotoClick={setSelectedPhotoIndex}
                />
            </div>

            <LightboxModal
                selectedPhotoIndex={selectedPhotoIndex}
                photos={filteredPhotos}
                onClose={handleClose}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
        </div>
    );
}
