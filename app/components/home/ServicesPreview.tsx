"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Users, Heart, Brush } from "lucide-react";

const services = [
    {
        icon: <Camera className="w-6 h-6" />,
        title: "Wedding Coverage",
        description: "Full-day photography and cinematography. Timeless photos + cinematic highlight films.",

    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Corporate & Brand",
        description: "Professional headshots, team portraits, and branded content for modern businesses.",

    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Engagement Sessions",
        description: "Romantic pre-wedding shoots and creative 'Save the Date' video clips.",

    },
    {
        icon: <Brush className="w-6 h-6" />,
        title: "Live Streaming",
        description: "Multi-camera live broadcast for weddings, church services, and corporate events.",

    },
];

export default function ServicesPreview() {
    return (
        <section className="py-32 bg-muted/30">
            <div className="max-width-container">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-foreground/60 uppercase tracking-widest text-[10px] md:text-xs font-semibold">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Tailored Photography <span className="italic">Experiences</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-10 border border-white/5 bg-background/50 hover:bg-background transition-colors flex flex-col items-center text-center space-y-6 group"
                        >
                            <div className="text-foreground transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif">{service.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="/services"
                        className="inline-block text-sm uppercase tracking-widest border-b border-white/20 pb-1 text-muted-foreground hover:text-white hover:border-white transition-colors"
                    >
                        Explore all packages
                    </Link>
                </div>
            </div>
        </section>
    );
}
