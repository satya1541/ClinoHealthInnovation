import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground"
        >
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Last Updated: February 2026</p>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p>Clino Health Innovation Pvt. Ltd. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information through our website and services.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal information (name, email, phone number) provided during registration or booking.</li>
                            <li>Health data relevant to emergency services (with your explicit consent).</li>
                            <li>Usage data and device information via our IoT platform.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Information</h2>
                        <p>We use your information to provide emergency medical services, facilitate communication with hospitals, and improve our health-tech solutions. Your data is encrypted and handled according to medical privacy standards.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
}
