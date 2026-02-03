import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const teamMembers = [
    {
        category: "Leadership",
        members: [
            { name: "Mr. Dipti Sundar Mohanty", role: "Founder & CEO", image: "/team/dipti-sundar-mohanty.webp" },
            { name: "Mr. Ranjeet Mohanty", role: "Co-Founder & COO", image: "/team/ranjeet-mohanty.webp" },
            { name: "Mr. Subham Subhadarshi Panda", role: "CTO", image: "/team/subham-subhadarshi-panda.png" },
        ]
    },
    {
        category: "Expert Advisors",
        members: [
            { name: "Dr. Dharma Jivan Samantaray", role: "Sr. Consultant Anaesthesia", image: "/team/dharma-jivan-samantaray.png" },
            { name: "Dr. Pragyan Kumar Routray", role: "HOD Critical Care Medicine", image: "/team/pragyan-kumar-routray.png" },
        ]
    },
    {
        category: "Tech & Development",
        members: [
            { name: "Biswajit Mishra", role: "IOT Manager", image: "/team/biswajit-mishra.webp" },
            { name: "Rajesh Mahapatra", role: "Sr. Android Dev", image: "/team/rajesh-mahapatra.webp" },
            { name: "Shesha Bhusan Mallik", role: "IOT Developer", image: "/team/shesha-bhusan-mallik.webp" },
            { name: "Gyana Ranjan Sahoo", role: "PCB Designer", image: "/team/gyana-ranjan-sahoo.webp" },
            { name: "Satya Narayana Behera", role: "DevOps Engineer", image: "/team/satya-narayana-behera.png" },
            { name: "Manoj Kumar Mohanta", role: "Web Developer", image: "/team/manoj-kumar-mohanta.png" },
            { name: "Saswat Rath", role: "IOT Developer", image: "/team/saswat-rath.png" },
            { name: "Millan Sahu", role: "Backend Developer", image: "/team/millan-sahu.jpg" },
            { name: "Gyana Ranjan Prusty", role: "App Developer", image: "/team/gyana-ranjan-prusty.jpg" },
            { name: "Soumyakant Gopal", role: "IOT Developer", image: "/team/soumyakant-gopal.jpeg" },
        ]
    },
    {
        category: "Operations & HR",
        members: [
            { name: "Priyanka Rout", role: "Digital Marketing", image: "/team/priyanka-rout.png" },
            { name: "Jayanta Kumar Das", role: "State Head", image: "/team/jayanta-kumar-das.webp" },
            { name: "Abinash Mohanty", role: "Operations Head", image: "/team/abinash-mohanty.webp" },
            { name: "Ramya Ranjan Behura", role: "PRO", image: "/team/ramya-ranjan-behura.webp" },
            { name: "Bandana Behera", role: "HR Manager", image: "/team/bandana-behera.webp" },
            { name: "Anniket Das", role: "Exec. Assistant", image: "/team/anniket-das.png" },
            { name: "Biswabijayee Panigrahi", role: "BD Manager", image: "/team/biswabijayee-panigrahi.png" },
            { name: "Pratap Rath", role: "Accounts Manager", image: "/team/pratap-rath.jpg" },
        ]
    }
];

export default function Teams() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground"
        >
            <Navbar />
            <main className="container mx-auto px-6 pt-24 pb-20">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">Our Team</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Driving innovation in emergency healthcare.
                    </p>
                </div>

                <div className="space-y-20">
                    {teamMembers.map((section) => (
                        <section key={section.category}>
                            <h2 className="text-2xl font-bold mb-10 text-center border-b border-border/40 pb-4 inline-block w-full">
                                {section.category}
                            </h2>
                            <div className={
                                section.category === "Leadership" || section.category === "Expert Advisors"
                                    ? "flex flex-wrap justify-center gap-10"
                                    : "grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10"
                            }>
                                {section.members.map((member, idx) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        className="flex flex-col items-center group"
                                    >
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-4 border-background shadow-lg ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground font-medium">
                                                {member.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </motion.div>
    );
}
