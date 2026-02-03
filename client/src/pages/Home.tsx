import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedPartners from "@/components/TrustedPartners";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary"
    >
      <Navbar />
      <Hero />
      <TrustedPartners />
      <Footer />
    </motion.div>
  );
}
