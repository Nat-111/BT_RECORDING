/**
 * Utility to format and trigger WhatsApp redirection
 */

export interface WhatsAppMessageData {
    name: string;
    email: string;
    eventType: string;
    date: string;
    location: string;
    message?: string;
}

const WHATSAPP_NUMBER = "233592700992";

export const formatWhatsAppMessage = (data: WhatsAppMessageData): string => {
    const sessionDetails = `Hi BT Recording,

My name is ${data.name} and I would like to inquire about booking a ${data.eventType} session.

Here are my details:
Email: ${data.email}
Date: ${data.date || "To be discussed"}
Location: ${data.location}

Event Details & Vision:
${data.message || "I would like to discuss the details of my project with you."}

I look forward to hearing from you.`;

    return sessionDetails;
};

export const triggerWhatsAppRedirect = (data: WhatsAppMessageData) => {
    const message = formatWhatsAppMessage(data);
    const encodedMessage = encodeURIComponent(message);

    // Using wa.me for a more direct and reliable redirection
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    if (typeof window !== "undefined") {
        const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    }
};
