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
    { id: "1", src: "/images/Blantyne-89.jpg (1).jpeg", title: "Professional Studio Portrait", category: "portrait" },
    { id: "2", src: "/images/Blantyne-29.jpg.jpeg", title: "Corporate Event", category: "events" },
    { id: "3", src: "/images/FY7A9847.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
    { id: "4", src: "/images/Blantyne-208.jpg (1).jpeg", title: "Corporate Event", category: "events" },
    { id: "5", src: "/images/FY7A9646.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
    { id: "6", src: "/images/Blantyne-134.jpg.jpeg", title: "Classic Headshot", category: "portrait" },
    { id: "7", src: "/images/JL6A7134.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
    { id: "8", src: "/images/Blantyne-81.jpg.jpeg", title: "Corporate Event", category: "portrait" },
    { id: "9", src: "/images/Blantyne-145.jpg.jpeg", title: "Corporate Event", category: "events" },
    { id: "10", src: "/images/blantyne-10.jpg", title: "Urban Street Portrait", category: "portrait" },
    { id: "11", src: "/images/CP1A0001.jpg", title: "Corporate Event", category: "events" },
    { id: "12", src: "/images/blantyne-112.jpg", title: "Natural Light Session", category: "portrait" },
    { id: "13", src: "/images/CP1A0006.jpg", title: "Corporate Event", category: "events" },
    { id: "14", src: "/images/blantyne-122.jpg", title: "Evening Golden Hour", category: "portrait" },
    { id: "15", src: "/images/CP1A0023.jpg", title: "Corporate Event", category: "events" },
    { id: "16", src: "/images/blantyne-2.jpg", title: "Elegant Studio Portrait", category: "portrait" },
    { id: "17", src: "/images/CP1A0002.jpg", title: "Corporate Event", category: "events" },
    { id: "18", src: "/images/CP1A0008.jpg", title: "Corporate Event", category: "events" },
    { id: "19", src: "/images/CP1A0010.jpg", title: "Corporate Event", category: "events" },
    { id: "20", src: "/images/CP1A0016.jpg", title: "Corporate Event", category: "events" },
    { id: "21", src: "/images/CP1A0017.jpg", title: "Corporate Event", category: "events" },
    { id: "22", src: "/images/CP1A0033.jpg", title: "Corporate Event", category: "events" },
    { id: "23", src: "/images/CP1A0047.jpg", title: "Corporate Event", category: "events" },
    { id: "24", src: "/images/CP1A0049.jpg", title: "Corporate Event", category: "events" },
    { id: "25", src: "/images/CP1A0058.jpg", title: "Corporate Event", category: "events" },
    { id: "26", src: "/images/CP1A0068.jpg", title: "Corporate Event", category: "events" },
    { id: "27", src: "/images/CP1A0086.jpg", title: "Corporate Event", category: "events" },
    // { id: "28", src: "/images/Blantyne.jpg.jpeg", title: "Wedding Portrait", category: "wedding" },
    { id: "29", src: "/images/blantyne-13.jpg", title: "Candid Expression Portrait", category: "portrait" },
    { id: "30", src: "/images/blantyne-14.jpg", title: "High Fashion Portrait", category: "portrait" },
    { id: "31", src: "/images/blantyne-16.jpg", title: "Modern Style Portrait", category: "portrait" },
    { id: "32", src: "/images/blantyne-22.jpg", title: "Relaxed Outdoor Portrait", category: "portrait" },
    { id: "33", src: "/images/blantyne-23.jpg", title: "Ambient Light Portrait", category: "portrait" },
    { id: "34", src: "/images/blantyne-28.jpg", title: "Fine Art Portrait", category: "portrait" },
    { id: "35", src: "/images/blantyne-31.jpg", title: "Cityscape Portrait", category: "portrait" },
    { id: "36", src: "/images/blantyne-32.jpg", title: "Direct Gaze Portrait", category: "portrait" },
    { id: "37", src: "/images/blantyne-39.jpg", title: "Soft Lighting Portrait", category: "portrait" },
    { id: "38", src: "/images/blantyne-41.jpg", title: "Contemporary Portrait", category: "portrait" },
    { id: "39", src: "/images/blantyne-44.jpg", title: "Vintage Style Portrait", category: "portrait" },
    { id: "40", src: "/images/blantyne-55.jpg", title: "Dramatic Shadows Portrait", category: "portrait" },
    { id: "41", src: "/images/blantyne-56.jpg", title: "Lush Background Portrait", category: "portrait" },
    { id: "42", src: "/images/blantyne-60.jpg", title: "Minimalist Portrait", category: "portrait" },
    { id: "43", src: "/images/blantyne-84.jpg", title: "Profile Silhouette Portrait", category: "portrait" },
    { id: "44", src: "/images/blantyne-87.jpg", title: "Emotional Beat Portrait", category: "portrait" },
    { id: "45", src: "/images/blantyne-97.jpg", title: "Bold Color Portrait", category: "portrait" },
    { id: "46", src: "/images/blantyne-99.jpg", title: "Final Look Portrait", category: "portrait" },
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
