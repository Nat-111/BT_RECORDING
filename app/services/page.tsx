"use client";

import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-width-container">
                <ServicesHero />
                <ServicesList />
                <ServicesCTA />
            </div>
        </div>
    );
}
