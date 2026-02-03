import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
    {
        title: "Full Stack Developer",
        type: "Full Time",
        location: "Bhubaneswar / Remote",
        description: "Build and maintain scalable web applications using React, Node.js, and cloud technologies. 2+ years experience preferred.",
        category: "Engineering"
    },
    {
        title: "IoT Developer",
        type: "Full Time",
        location: "Bhubaneswar, India",
        description: "Design and develop embedded systems and IoT solutions for our ambulance monitoring devices. Experience with Arduino, ESP32, and sensor integration required.",
        category: "Engineering"
    },
    {
        title: "Mobile App Developer",
        type: "Full Time",
        location: "Bhubaneswar / Remote",
        description: "Develop and maintain Android/iOS applications for patients and hospital partners. Flutter or React Native experience is a plus.",
        category: "Engineering"
    },
    {
        title: "DevOps Engineer",
        type: "Full Time",
        location: "Bhubaneswar / Remote",
        description: "Manage cloud infrastructure (AWS/GCP), CI/CD pipelines, and ensure 99.9% uptime for our critical healthcare systems.",
        category: "Engineering"
    },
    {
        title: "Backend Developer",
        type: "Full Time",
        location: "Bhubaneswar, India",
        description: "Build robust APIs and microservices using Node.js, Python, or Go. Experience with real-time systems and databases is a plus.",
        category: "Engineering"
    },
    {
        title: "UI/UX Designer",
        type: "Full Time",
        location: "Bhubaneswar / Remote",
        description: "Design intuitive interfaces for our web and mobile apps. Experience with Figma and user research in healthcare is preferred.",
        category: "Design"
    }
];

export default function Careers() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground"
        >
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Join Our Mission
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mt-4 mb-6 font-display"
                    >
                        Shape the Future of <br /> Emergency Care
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Mo Ambulance is a team of dreamers and doers dedicated to making high-quality healthcare accessible to every corner of India.
                    </motion.p>
                </div>
            </section>

            {/* Jobs Listing */}
            <main className="container mx-auto px-6 pb-32">
                <div className="grid gap-6 max-w-5xl mx-auto">
                    {jobs.map((job, idx) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                            {job.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-3xl">
                                        {job.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            {job.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Culture CTA */}
                <div className="mt-32 rounded-3xl p-12 bg-primary text-primary-foreground text-center overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-black/10 rounded-full blur-3xl" />
                    <h2 className="text-4xl font-bold mb-6 font-display">Don't see the right role?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto font-medium">
                        We're always looking for passionate health-tech innovators. Send your CV to info@clinohealthinnovation.com
                    </p>
                    <Button variant="secondary" size="lg" className="rounded-full px-12 text-lg font-bold">
                        Send Your CV
                    </Button>
                </div>
            </main>

            <Footer />
        </motion.div>
    );
}
