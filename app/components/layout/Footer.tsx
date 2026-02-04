import Link from "next/link";
import { Instagram, Youtube, Music2, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted py-20 border-t border-white/5">
            <div className="max-width-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-serif tracking-widest uppercase"
                        >
                            <img src="/images/no bg.png" alt="BT Recording" width={40} height={40} />
                            <span>Recording</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-xs">
                            Capturing the essence of life through an editorial lens. Specialized in wedding, portrait, and lifestyle photography.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">

                        <nav className="flex flex-col gap-4">
                            <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors w-fit">Gallery</Link>
                            <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors w-fit">Services</Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors w-fit">About Me</Link>
                            <Link href="/booking" className="text-muted-foreground hover:text-foreground transition-colors w-fit">Book a Session</Link>
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-foreground">Get in Touch</h4>
                        <div className="space-y-4">
                            <a href="mailto:Johnnyagbodji7877@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>Johnnyagbodji7877@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>Ghana, Accra</span>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <a
                                    href="https://www.instagram.com/blan_tien?igsh=dWlpdnhiaWhheXdt&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 border border-white/10 rounded-full hover:border-foreground hover:text-foreground transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="http://www.youtube.com/@bt_rec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 border border-white/10 rounded-full hover:border-foreground hover:text-foreground transition-all"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@blantien?_r=1&_t=ZS-93e1vC00Gts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 border border-white/10 rounded-full hover:border-foreground hover:text-foreground transition-all"
                                    aria-label="TikTok"
                                >
                                    <Music2 className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-xs tracking-widest uppercase text-muted-foreground/60">
                    <p>© {currentYear} BT Recording. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
