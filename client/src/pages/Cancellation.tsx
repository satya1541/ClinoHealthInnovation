import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Cancellation() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground"
        >
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 font-display">Cancellation Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Last Updated: February 2026</p>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Ambulance Bookings</h2>
                        <p>Bookings can be cancelled without any charge if the cancellation is made within 2 minutes of the driver accepting the request. After this window, a nominal cancellation fee may apply to compensate the driver for their time and fuel.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Product Orders</h2>
                        <p>Orders for IoT devices can be cancelled anytime before the product is dispatched. Once dispatched, the user must follow the Return & Refund process defined in our full policy.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Refund Process</h2>
                        <p>Refunds for eligible cancellations will be processed within 5-7 business days to the original mode of payment.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
}
