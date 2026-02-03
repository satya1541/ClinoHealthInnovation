import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === 1 ? 2 : 1));
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Video play failed:", err));
    }
  }, [currentVideo]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Full-width Background Video */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.video
            key={currentVideo}
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={currentVideo === 1 ? "/hero-video.mp4" : "/hero-video-2.mp4"} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next Gen Health Tech
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tight text-foreground">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Connected Care
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Revolutionizing healthcare with advanced IoT monitoring devices and
            AI-powered analytics. Seamlessly connecting patients and providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button size="lg" className="rounded-full text-lg h-12 px-8 shadow-lg shadow-primary/25 cursor-pointer">
                Explore Devices <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8 bg-background/50 backdrop-blur-sm border-2 cursor-pointer">
                Our Product
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-2xl font-display">
                <Activity className="h-5 w-5" /> 99.9%
              </div>
              <p className="text-sm text-muted-foreground">Uptime Accuracy</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-2xl font-display">
                <ShieldCheck className="h-5 w-5" /> HIPAA
              </div>
              <p className="text-sm text-muted-foreground">Compliant Secure</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-2xl font-display">
                <Zap className="h-5 w-5" /> Real-time
              </div>
              <p className="text-sm text-muted-foreground">Data Sync</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
