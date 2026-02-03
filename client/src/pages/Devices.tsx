import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, HeartPulse, Activity, Zap, Shield, Smartphone } from "lucide-react";
import deviceWearable from "@/assets/device-wearable.png";
import { Button } from "@/components/ui/button";

export default function Devices() {
  const devices = [
    {
      name: "Clino Vital Sense",
      tagline: "Clinical-Grade Wearable",
      description: "Continuous monitoring for cardiac and respiratory health.",
      image: deviceWearable,
      features: ["Real-time ECG", "SpO2 Tracking", "Sleep Analysis", "Fall Detection"]
    },
    {
      name: "Clino Hub",
      tagline: "The Heart of the Home",
      description: "Centralized IoT hub that connects all Clino devices seamlessly.",
      image: deviceWearable, // Reusing for mockup
      features: ["LTE/5G Connectivity", "Emergency Voice Hub", "Data Encryption", "Battery Backup"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-5xl font-bold font-display mb-6">IoT Devices</h1>
            <p className="text-xl text-muted-foreground">
              Precision-engineered hardware designed to bridge the gap between patients and providers.
            </p>
          </motion.div>

          <div className="grid gap-24">
            {devices.map((device, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-16 items-center ${index % 1 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-white">
                    <img src={device.image} alt={device.name} className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm">{device.tagline}</span>
                  <h2 className="text-4xl font-bold font-display mt-2 mb-6">{device.name}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{device.description}</p>
                  <ul className="grid grid-cols-2 gap-4 mb-8">
                    {device.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="text-primary h-5 w-5" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="rounded-full">Order for Clinic</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
