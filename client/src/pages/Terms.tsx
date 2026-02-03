import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Terms() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground"
        >
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 font-display">Terms & Conditions</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Last Updated: February 2026</p>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                        <p>By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Provided</h2>
                        <p>We provide a tech-enabled emergency health care service support system. While we facilitate connection between patients and hospitals, we are not a hospital ourselves. Emergency response times may vary based on traffic, weather, and availability.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                        <p>Users must provide accurate information during emergencies. False alarms or misuse of the emergency system may lead to service suspension or legal action.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
}
