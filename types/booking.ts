export interface ContactInfo {
    email: string;
    phone?: string;
    instagram?: string;
    location?: string;
}

export interface BookingSession {
    serviceId: string;
    date: string;
    contact: ContactInfo;
    notes?: string;
}
