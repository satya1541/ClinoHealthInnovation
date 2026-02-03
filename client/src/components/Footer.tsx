import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] text-white pt-10 pb-6 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Column 1: Clino Health Innovation */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wider font-display uppercase">
              Clino Health Innovation
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Revolutionizing healthcare with advanced IoT monitoring devices and AI-powered analytics. Seamlessly connecting patients and providers.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-base">Get In Touch :</h4>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm">info@clinohealthinnovation.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-gray-300 text-sm">9040198628</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, color: "bg-[#1877F2]", key: "fb" },
                { icon: Instagram, color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", key: "ig" },
                { icon: Twitter, color: "bg-[#000000]", key: "x" },
                { icon: Linkedin, color: "bg-[#0077b5]", key: "in" }
              ].map((social) => (
                <motion.a
                  key={social.key}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`${social.color} w-8 h-8 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: USEFUL LINKS */}
          <div className="lg:pl-12">
            <h3 className="text-lg font-bold mb-6 tracking-wider font-display uppercase">
              USEFUL LINKS
            </h3>
            <ul className="space-y-3">
              {[
                "Home", "About", "Products", "Store", "Careers"
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: FIND US HERE */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wider font-display uppercase">
              FIND US HERE
            </h3>

            {/* Map Embed Container */}
            <div className="w-full h-32 rounded-xl overflow-hidden border border-white/10 shadow-inner group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119747.85406798154!2d85.74837581977933!3d20.29548325946351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909fb4629479b%3A0xc391152a425339f4!2sMo%20Ambulance!5e0!3m2!1sen!2sin!4v1716892345678!5m2!1sen!2sin"
                className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-4">
              {/* Address 1: Bhubaneswar */}
              <div className="flex gap-3">
                <div className="mt-1">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
                </div>
                <div className="text-xs space-y-1">
                  <p className="text-gray-300 leading-relaxed font-semibold">
                    : Campus 11, KIIT University, Patia, Bhubaneswar, Odisha 751024,
                  </p>
                  <p className="text-gray-400">
                    Contact Us : <span className="text-white">+91 9040198628</span>
                  </p>
                </div>
              </div>

              {/* Address 2: Singapore */}
              <div className="flex gap-3">
                <div className="mt-1">
                  <img src="https://flagcdn.com/w20/sg.png" alt="Singapore" className="w-5 h-auto rounded-sm" />
                </div>
                <div className="text-xs space-y-1">
                  <p className="text-gray-300 leading-relaxed font-semibold">
                    : 105, Cecil Street, #11-00, The Octagon, Singapore(069534),
                  </p>
                  <p className="text-gray-400">
                    Contact Us : <span className="text-white">+65-96736653</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/cancellation" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</Link>
            </div>
            <p className="text-gray-500 text-xs text-center md:text-right">
              © 2020 - 2026, Clino Health Innovation Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Support (Bottom Right) */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-white rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center gap-3 border border-gray-100 pointer-events-auto cursor-pointer hover:scale-105 transition-transform group">
          <div className="p-2 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
            <Phone className="w-5 h-5 text-red-600" />
          </div>
          <span className="text-gray-900 font-bold text-lg">90401 98628</span>
        </div>
      </motion.div>
    </footer>
  );
}
