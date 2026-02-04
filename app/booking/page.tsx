import BookingHero from "../components/booking/BookingHero";
import BookingForm from "../components/booking/BookingForm";
import BookingContactInfo from "../components/booking/BookingContactInfo";

export default function BookingPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-width-container max-w-4xl">
                <BookingHero />
                <BookingForm />
                <BookingContactInfo />
            </div>
        </div>
    );
}
