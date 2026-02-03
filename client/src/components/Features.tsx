import { motion } from "framer-motion";
import { Check, Cpu, Globe, HeartPulse } from "lucide-react";
import deviceWearable from "@/assets/device-wearable.png";
import doctorTech from "@/assets/doctor-tech.png";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        
        {/* Section 1: IoT Device */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
              <img 
                src={deviceWearable} 
                alt="Clino Vital Watch" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating UI Card */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-background p-4 rounded-xl shadow-xl border flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <HeartPulse size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Heart Rate</p>
                <p className="text-lg font-bold font-display">72 BPM</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold font-display mb-6">Clino Vital Sense</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our flagship wearable device tracks vital signs with clinical-grade accuracy. 
              Designed for continuous remote patient monitoring without disrupting daily life.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Continuous ECG Monitoring",
                "Blood Oxygen (SpO2) Tracking",
                "Temperature & Sleep Analysis",
                "14-Day Battery Life"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="default" className="rounded-full">View Specifications</Button>
          </motion.div>
        </div>

        {/* Section 2: Services */}
        <div id="services" className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold font-display mb-6">Integrated Care Platform</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hardware is just the beginning. Our cloud platform connects devices to doctors, 
              providing real-time insights and AI-driven alerts for preventative care.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-background border hover:border-primary/50 transition-colors shadow-sm">
                <Globe className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">Remote Monitoring</h3>
                <p className="text-sm text-muted-foreground">Keep track of patients anywhere in the world.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border hover:border-primary/50 transition-colors shadow-sm">
                <Cpu className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Diagnostics</h3>
                <p className="text-sm text-muted-foreground">Early warning systems powered by machine learning.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
              <img 
                src={doctorTech} 
                alt="Doctor using Clino Platform" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
