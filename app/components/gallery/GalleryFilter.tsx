"use client";

import { clsx } from "clsx";

interface GalleryFilterProps {
    categories: readonly string[];
    filter: string;
    setFilter: (category: any) => void;
}

export default function GalleryFilter({ categories, filter, setFilter }: GalleryFilterProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={clsx(
                        "text-xs uppercase tracking-[0.2em] font-medium transition-all pb-2 border-b-2",
                        filter === cat ? "text-foreground border-white" : "text-muted-foreground border-transparent hover:text-white"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
