import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
    {
        category: "Leadership",
        members: [
            { name: "Mr. Dipti Sundar Mohanty", role: "Founder & CEO", image: "/team/dipti-sundar-mohanty.webp", linkedin: "https://www.linkedin.com/in/dipti-sundar-mohanty/" },
            { name: "Mr. Ranjeet Mohanty", role: "Co-Founder & COO", image: "/team/ranjeet-mohanty.webp", linkedin: "https://www.linkedin.com/in/ranjit-mohanty-1a4ab376/" },
            { name: "Mr. Subham Subhadarshi Panda", role: "CTO", image: "/team/subham-subhadarshi-panda.png", linkedin: "https://www.linkedin.com/in/subham-subhadarshi-panda-119965171/" },
        ]
    },
    {
        category: "Expert Advisors",
        members: [
            { name: "Dr. Dharma Jivan Samantaray", role: "Sr. Consultant Anaesthesia", image: "/team/dharma-jivan-samantaray.png", linkedin: "https://www.linkedin.com/in/dharmajivan-samantaray-54948915/?originalSubdomain=in" },
            { name: "Dr. Pragyan Kumar Routray", role: "HOD Critical Care Medicine", image: "/team/pragyan-kumar-routray.png", linkedin: "https://www.linkedin.com/in/pragyan-routray-7a013117/?originalSubdomain=in" },
        ]
    },
    {
        category: "Tech & IOT",
        members: [
            { name: "Biswajit Mishra", role: "IOT Manager", image: "/team/biswajit-mishra.webp", linkedin: "https://www.linkedin.com/in/biswajeet-mishra-0005141ba/" },
            { name: "Rajesh Mahapatra", role: "Sr. Android Dev", image: "/team/rajesh-mahapatra.webp", linkedin: "https://www.linkedin.com/in/rajesh-mahapatra-003b071a7/" },
            { name: "Shesha Bhusan Mallik", role: "IOT Developer", image: "/team/shesha-bhusan-mallik.webp", linkedin: "https://www.linkedin.com/in/sheshabhusan-mallik-5b704b259/" },
            { name: "Gyana Ranjan Sahoo", role: "PCB Designer", image: "/team/gyana-ranjan-sahoo.webp", linkedin: "https://www.linkedin.com/in/gyana-ranjan-sahoo-8a43bb2a5/" },
            { name: "Satya Narayana Behera", role: "DevOps Engineer", image: "/team/satya-narayana-behera.png", linkedin: "http://www.linkedin.com/in/satya-narayana-behera/" },
            { name: "Manoj Kumar Mohanta", role: "Web Developer", image: "/team/manoj.png", linkedin: "https://www.linkedin.com/in/manoj-kumar-mohanta-4b611823a/" },
            { name: "Saswat Rath", role: "IOT Developer", image: "/team/saswat-rath.png", linkedin: "https://www.linkedin.com/in/saswat-rath-9312b7218/" },
            { name: "Millan Sahu", role: "Backend Developer", image: "/team/millan-sahu.jpg", linkedin: "https://www.linkedin.com/in/millan-kumar-sahu-820549256/" },
            { name: "Priyanka Rout", role: "Digital Marketing", image: "/team/priyanka-rout.png", linkedin: "https://www.linkedin.com/in/priyanka-rout-b695551b2/" },
            { name: "Gyana Ranjan Prusty", role: "App Developer", image: "/team/gyana-ranjan-prusty.jpg", linkedin: "https://www.linkedin.com/in/gyana-ranjan-prusty-21696023a/" },
            { name: "Soumyakant Gopal", role: "IOT Developer", image: "/team/soumyakant-gopal.jpeg", linkedin: "https://www.linkedin.com/in/soumyakantgopal/" },
        ]
    },
    {
        category: "Operations & HR",
        members: [
            { name: "Jayanta Kumar Das", role: "State Head", image: "/team/jayanta-kumar-das.webp", linkedin: "https://in.linkedin.com/company/moambulance" },
            { name: "Abinash Mohanty", role: "Operations Head", image: "/team/abinash-mohanty.webp", linkedin: "https://www.linkedin.com/in/abinash-mohanty-471a69129/" },
            { name: "Ramya Ranjan Behura", role: "PRO", image: "/team/ramya-ranjan-behura.webp", linkedin: "https://in.linkedin.com/company/moambulance" },
            { name: "Bandana Behera", role: "HR Manager", image: "/team/bandana-behera.webp", linkedin: "https://www.linkedin.com/in/bandana-behera-785147214/" },
            { name: "Anniket Das", role: "Exec. Assistant", image: "/team/anniket-das.png", linkedin: "https://www.linkedin.com/in/anniket-das-531625212" },
            { name: "Biswabijayee Panigrahi", role: "BD Manager", image: "/team/biswabijayee-panigrahi.png", linkedin: "https://www.linkedin.com/in/biswabijayee-panigrahi-6453a829b" },
            { name: "Pratap Rath", role: "Accounts Manager", image: "/team/pratap-rath.jpg", linkedin: "https://www.linkedin.com/in/pratap-rath-5a162033a/" },
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
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                >
                                                    <div className="bg-white p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                        <Linkedin className="w-5 h-5 text-[#0077b5]" />
                                                    </div>
                                                </a>
                                            )}
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
