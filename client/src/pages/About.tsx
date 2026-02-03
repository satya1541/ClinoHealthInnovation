import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import doctorTech from "@/assets/doctor-tech.png";
import { Heart, ShieldCheck, Zap, Target } from "lucide-react";

export default function About() {
  const values = [
    { icon: Heart, title: "Compassion", text: "Every emergency is a person in need. We treat every call with maximum empathy." },
    { icon: Target, title: "Precision", text: "In healthcare, accuracy saves lives. Our IoT devices are clinical-grade." },
    { icon: ShieldCheck, title: "Trust", text: "NABL-compliant and secure. Your health data is safe with us." },
    { icon: Zap, title: "Speed", text: "The golden hour matters. Our tech streamlines dispatch like never before." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display">Bridging Tech & Care</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clino Health Innovation was founded with a single mission: to make healthcare more accessible and proactive through the power of IoT and AI.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold font-display">Our Origin</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Headquartered in Bhubaneswar, our team of doctors, engineers, and designers work tirelessly to create devices that aren't just high-tech, but human-centric.
                </p>
                <p>
                  We believe that the future of medicine isn't just in the hospital—it's in the data that connects us all, allowing for earlier detection and better quality of life.
                </p>
                <p>
                  From a small team of four in 2021 to a national-level innovator today, we have stayed true to our roots: saving lives through technology.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={doctorTech} alt="Clino Team" className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display uppercase tracking-wider">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-background border hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
