"use client";

import { MessageCircle } from "lucide-react";
import { triggerWhatsAppRedirect } from "./WhatsAppRedirect";

export default function BookingContactInfo() {
    const handleQuickInquiry = () => {
        triggerWhatsAppRedirect({
            name: "[Your Name]",
            email: "[Your Email]",
            eventType: "Photography",
            date: "[Preferred Date]",
            location: "[Your Location]",
            message: "I'm interested in booking a session. Please let me know your availability."
        });
    };

    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center border-t border-white/5 pt-12">
            <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-foreground/60">Studio Email</span>
                <p className="font-serif text-lg">
                    <a href="mailto:Johnnyagbodji7877@gmail.com" className="hover:text-white/70 transition-colors">
                        Johnnyagbodji7877@gmail.com
                    </a>
                </p>
            </div>
            <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-foreground/60">Availability</span>
                <p className="font-serif text-lg">Mon — Sat, 9am — 6pm</p>
            </div>
            <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-foreground/60">Location</span>
                <p className="font-serif text-lg">Accra, Ghana</p>
            </div>
            <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-foreground/60">Direct Chat</span>
                <button
                    onClick={handleQuickInquiry}
                    className="flex items-center gap-2 mx-auto font-serif text-lg text-white hover:text-foreground transition-colors"
                >
                    <MessageCircle className="w-4 h-4 text-white/60" />
                    WhatsApp
                </button>
            </div>
        </div>
    );
}
