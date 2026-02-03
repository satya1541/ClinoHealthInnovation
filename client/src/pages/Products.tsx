import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Shield, Zap, Globe, HeartPulse, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
    {
        id: "hams",
        name: "HAMS",
        tagline: "Hospital & Ambulance Management System",
        price: "Contact for Demo",
        features: ["Web-Based Platform", "Patient-Ambulance Connection", "Optimized Operations", "Data-Driven Decisions"],
        image: "/products/hams.png",
        description: "HAMS is a web-based ambulance and hospital management system that connects patients, ambulances, hospitals, and corporates on one platform. It optimizes hospital operations, enhances ambulance services, and supports cost-effective, data-driven decisions — improving patient flow, communication, and resource use."
    },
    {
        id: "sams",
        name: "SAMS",
        tagline: "Smart Ambulance Monitoring System",
        price: "Contact for Demo",
        features: ["Cloud-Based Platform", "Real-Time Vitals", "IoT Parameters", "Automated Reporting"],
        image: "/products/sams.png",
        description: "SAMS is an advanced cloud-based platform that ensures real-time monitoring of ambulance vitals and IoT parameters. It enables instant alerts and live tracking for better decision-making during emergencies. The system provides continuous insights into patient health and ambulance conditions with automated reporting."
    },
    {
        id: "aps",
        name: "APS",
        tagline: "Ambulance Positioning System",
        price: "Contact for Demo",
        features: ["Smart Dispatch", "Real-Time Tracking", "70% Faster Response", "Trip Logs & Reports"],
        image: "/products/aps.png",
        description: "Our ambulance management system offers real-time tracking through a centralized hospital dashboard, enabling complete visibility of all active ambulances. With a smart dispatch system, it assigns the nearest ambulance and reduces response time by up to 70%. It integrates seamlessly into existing hospital systems with no hardware changes."
    },
    {
        id: "ers",
        name: "ERS",
        tagline: "Emergency Response System",
        price: "Contact for Demo",
        features: ["One-Touch Alert", "Public Space Safety", "Instant Location Sharing", "Command Center Backup"],
        image: "/products/ers.png",
        description: "ERS is a smart solution designed for rapid emergency handling in public spaces like malls and societies. With a single button press, it alerts the nearest hospital in real-time. If no action is taken within 2 minutes, our central Command Control Room takes over, ensuring the nearest ambulance reaches faster."
    },
    {
        id: "smart-ambulance",
        name: "IoT Smart Ambulance",
        tagline: "Next-Gen Integrated Ambulance",
        price: "Contact for Pricing",
        features: ["SAMS Integration", "Real-Time Vital Monitoring", "Cloud-Based Alerts", "Automated Reporting"],
        image: "/products/smart-ambulance.png",
        description: "Our IoT Integrated Next-Gen Smart Ambulances provide a comprehensive solution combining SAMS, realtime quality & vital monitoring of IoT parameters, and cloud-based monitoring with realtime alerts and reporting. This transforms standard ambulances into intelligent, data-driven life-saving units."
    }
];

export default function Products() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground"
        >
            <Navbar />

            <section className="pt-40 pb-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Our Solutions</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        High-precision IoT hardware and software built to bridge the gap between patient and provider.
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-6 py-24 space-y-32">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
                    >
                        <div className="flex-1">
                            <div className="relative group flex items-center justify-center">
                                <div className="relative w-full max-w-lg">
                                    <img src={product.image} alt={product.name} className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <div>
                                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{product.tagline}</h4>
                                <h2 className="text-4xl md:text-5xl font-bold font-display">{product.name}</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {product.features.map(feature => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="font-medium text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </main>

            <Footer />
        </motion.div>
    );
}
