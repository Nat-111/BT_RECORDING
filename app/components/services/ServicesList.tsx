"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Service } from "@/types/service";

const services: Service[] = [
    {
        id: "1",
        title: "Wedding Photography & Cinematography",
        description: "Full-day coverage capturing every key moment. Timeless photos + cinematic highlight film.",
        price: "Custom Quote",
        features: ["Full Day Coverage", "Cinematic Film", "Digital Gallery", "Print Rights"]
    },
    {
        id: "2",
        title: "Wedding Highlight Film",
        description: "3–6 minute emotional, music-driven recap video designed for sharing and reliving your day.",
        price: "From $1,500",
        features: ["Cinematic Editing", "Music Licensed", "4K Resolution", "Online Sharing"]
    },
    {
        id: "3",
        title: "Full-Length Wedding Film",
        description: "20–60 minute documentary-style film preserving the complete story of your wedding day.",
        price: "From $2,500",
        features: ["Documentary Style", "Ceremony & Speeches", "Multiple Angles", "Archive Quality"]
    },
    {
        id: "4",
        title: "Corporate & Brand Photography",
        description: "Professional headshots, team portraits, office shots, product images, and branded lifestyle content.",
        price: "From $600",
        features: ["Studio or Location", "Brand Consistency", "High-End Retouching", "Commercial Rights"]
    },
    {
        id: "5",
        title: "Corporate Event Coverage",
        description: "Photography and videography for conferences, launches, galas, awards, and company milestones.",
        price: "From $800",
        features: ["Fast Turnaround", "Event Highlights", "Professional Lighting", "Group Shots"]
    },
    {
        id: "6",
        title: "Live Streaming",
        description: "Multi-camera live broadcast for weddings, corporate events, church services, and seminars.",
        price: "From $1,000",
        features: ["Multi-Cam Setup", "Recording Included", "Global Reach", "Stable Stream"]
    },
    {
        id: "7",
        title: "Engagement Sessions",
        description: "Romantic pre-wedding photo shoots and short “Save the Date” video clips.",
        price: "From $450",
        features: ["Pre-Wedding Shoot", "Save the Date Video", "Location Choice", "Social Ready"]
    },
    {
        id: "8",
        title: "Event Highlight Reels",
        description: "Short 1–4 minute recap videos for birthdays, anniversaries, and social events.",
        price: "From $400",
        features: ["Birthday/Anniversary", "Dynamic Editing", "Social Format", "Quick Delivery"]
    },
    {
        id: "9",
        title: "Additional Offerings",
        description: "Teasers, drone footage, combo packages, and physical heritage products.",
        price: "Varies",
        features: ["Drone Footage", "Same-Day Edits", "Albums & Frames", "Photo Books"]
    }
];

export default function ServicesList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group p-8 md:p-10 border border-white/5 bg-background/50 hover:border-white/10 transition-all flex flex-col justify-between"
                >
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif group-hover:text-white transition-colors leading-tight">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground font-light leading-relaxed text-sm">
                            {service.description}
                        </p>
                        <ul className="space-y-3 pt-4">
                            {service.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground/80">
                                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/5">
                        <Link
                            href="/booking"
                            className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground border-b border-white/10 pb-1 hover:text-white hover:border-white transition-all"
                        >
                            Book This Service
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
