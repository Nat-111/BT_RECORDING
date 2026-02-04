"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Calendar, User, MessageCircle, AlertCircle, CheckCircle2, MapPin } from "lucide-react";
import { clsx } from "clsx";

import { triggerWhatsAppRedirect } from "./WhatsAppRedirect";

const eventTypes = ["Wedding", "Portrait", "Editorial", "Event", "Other"];

export default function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            location: formData.get("location") as string,
            eventType: formData.get("eventType") as string,
            date: formData.get("date") as string,
            message: formData.get("message") as string,
        };

        if (!data.name || !data.email || !data.eventType || !data.location) {
            setError("Please fill in all required fields.");
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate a small delay for UX
            await new Promise(resolve => setTimeout(resolve, 800));

            triggerWhatsAppRedirect(data);
            setSuccess(true);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-muted/30 border border-white/5 p-8 md:p-12 shadow-2xl relative max-w-2xl mx-auto"
        >
            {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-serif">Inquiry Sent!</h2>
                    <p className="text-muted-foreground max-w-sm">
                        Thank you, your details have been captured. You are being redirected to WhatsApp to finalize the details.
                    </p>
                    <button
                        onClick={() => setSuccess(false)}
                        className="text-foreground/60 text-sm uppercase tracking-widest border-b border-white/20 pb-1"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <User className="w-3 h-3 text-white/60" /> Full Name *
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full bg-background border-b border-white/10 py-3 px-0 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground/30 font-light"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <Mail className="w-3 h-3 text-white/60" /> Email Address *
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full bg-background border-b border-white/10 py-3 px-0 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground/30 font-light"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="location" className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-white/60" /> Location *
                            </label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                required
                                className="w-full bg-background border-b border-white/10 py-3 px-0 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground/30 font-light"
                                placeholder="Accra, Ghana"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                    <Phone className="w-3 h-3 text-white/60" /> Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="w-full bg-background border-b border-white/10 py-3 px-0 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground/30 font-light"
                                    placeholder="+233 (000) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="date" className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                    <Calendar className="w-3 h-3 text-white/60" /> Preferred Date
                                </label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    className="w-full bg-background border-b border-white/10 py-3 px-0 focus:outline-none focus:border-white transition-colors font-light text-muted-foreground/50 invert-[0.8] brightness-200"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 text-center">
                        <label className="text-[10px] uppercase tracking-widest text-muted-foreground block">Session Type *</label>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {eventTypes.map((type) => (
                                <label key={type} className="relative">
                                    <input
                                        type="radio"
                                        name="eventType"
                                        value={type}
                                        required
                                        className="peer sr-only"
                                    />
                                    <div className="px-6 py-2 border border-white/10 text-xs uppercase tracking-widest cursor-pointer hover:bg-white/5 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all rounded-sm">
                                        {type}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <MessageCircle className="w-3 h-3 text-white/60" /> Your Event Details
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full bg-background border border-white/10 p-4 focus:outline-none focus:border-white transition-colors placeholder:text-muted-foreground/30 font-light resize-none"
                            placeholder="Tell us about your event or project…"
                        />
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 text-red-500 text-xs uppercase tracking-widest pt-2">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={clsx(
                                "w-full bg-foreground text-background py-5 uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-4 hover:bg-white/90 transition-all rounded-sm",
                                isSubmitting && "opacity-70 cursor-not-allowed"
                            )}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            ) : (
                                <>
                                    Confirm Secure Inquiry
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                        <p className="text-[10px] text-muted-foreground/40 text-center mt-4 uppercase tracking-[0.2em] flex items-center justify-center gap-1">
                            Direct WhatsApp Encryption Active
                        </p>
                    </div>
                </form>
            )}

            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/5 -translate-x-[-1px] -translate-y-[-1px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/5 translate-x-[-1px] translate-y-[-1px] pointer-events-none" />
        </motion.div>
    );
}
