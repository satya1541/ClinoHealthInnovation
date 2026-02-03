import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Minus, Plus } from "lucide-react";

export default function Store() {
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const incrementQty = () => setQuantity(q => q + 1);
    const decrementQty = () => setQuantity(q => Math.max(1, q - 1));

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex items-center justify-center">
                            <img
                                src="/products/ers-device.png"
                                alt="ERS Device"
                                className="w-full max-w-md object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <h1 className="text-4xl font-bold font-display text-primary">
                            Emergency Response System (ERS)
                        </h1>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p className="font-medium text-gray-800">
                                Built for Fast, Life-Saving Emergency Care.
                            </p>
                            <p className="text-sm">
                                In an emergency, patients often struggle to find help fast. Government ambulances (like 108) only take them to nearby government hospitals, often skipping private hospitals—even when patients have health insurance or personal preferences.
                            </p>
                            <p className="text-sm">
                                ERS is a smart emergency button device installed in societies, apartments, malls, and public spaces. When pressed, it instantly alerts a linked private hospital using a real-time dashboard and siren. Hospital sees patient's location, name, and contact details. The hospital calls the patient and assesses the case, and an Ambulance (ALS/BLS) is dispatched immediately. If the hospital doesn't respond in 2 minutes, the alert goes to our <span className="font-bold text-red-600">Central Command Control Room (CCR)</span>, which ensures ambulance dispatch without delay.
                            </p>

                            <ul className="space-y-2 text-sm list-disc pl-5 marker:text-primary">
                                <li><strong>Patients:</strong> No panic, no calls—just press the button.</li>
                                <li><strong>Hospitals:</strong> Get direct inbound emergency cases from nearby zones.</li>
                                <li><strong>Societies/Malls:</strong> Offer 24x7 emergency support to residents and visitors.</li>
                            </ul>

                            <p className="text-sm border-l-4 border-primary pl-4 italic bg-primary/5 py-2 rounded-r">
                                Linked with <span className="font-bold">APS (Ambulance Positioning System)</span> for nearest ambulance dispatch. Active CCR backup ensures 100% response. Mapped to only one hospital per device for clarity and accountability.
                            </p>

                            <p className="text-sm font-semibold text-gray-800">
                                We help hospitals increase revenue and save lives. Get ERS installed today.
                            </p>
                        </div>

                        <div className="pt-6 flex gap-4">
                            <Button
                                size="lg"
                                className="bg-[#E31E24] hover:bg-[#c4151a] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-500/20"
                                onClick={() => setIsOrderOpen(true)}
                            >
                                Order Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#E31E24] text-[#E31E24] hover:bg-red-50 px-8 py-6 text-lg rounded-xl"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />

            {/* Order Modal */}
            <AnimatePresence>
                {isOrderOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsOrderOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative z-10"
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-4 border-b flex items-center justify-between bg-gray-50/50">
                                <h2 className="text-xl font-bold font-display text-gray-800">Order Details</h2>
                                <button
                                    onClick={() => setIsOrderOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-6">
                                {/* Product Summary */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex gap-4 items-center">
                                    <div className="w-16 h-16 bg-white rounded-lg p-2 border flex items-center justify-center shrink-0">
                                        <img src="/products/ers-device.png" alt="ERS" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-gray-900">ERS</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <div className="flex items-center border rounded bg-white h-8">
                                                <button onClick={decrementQty} className="w-8 h-full flex items-center justify-center hover:bg-gray-50 text-gray-600"><Minus className="w-3 h-3" /></button>
                                                <div className="w-8 h-full flex items-center justify-center text-sm font-semibold border-x">{quantity}</div>
                                                <button onClick={incrementQty} className="w-8 h-full flex items-center justify-center hover:bg-gray-50 text-gray-600"><Plus className="w-3 h-3" /></button>
                                            </div>
                                            <span className="text-sm text-gray-500">Qty: {quantity}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Total</p>
                                        <p className="font-bold text-lg text-[#E31E24]">₹{(5999 * quantity).toFixed(2)}</p>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Your Name</Label>
                                        <Input id="name" placeholder="Enter full name" className="h-11 bg-gray-50/50 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="name@example.com" className="h-11 bg-gray-50/50 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-11 bg-gray-50/50 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Delivery Address</Label>
                                        <Textarea id="address" placeholder="Enter complete address" className="bg-gray-50/50 focus:bg-white transition-colors resize-none h-24" />
                                    </div>
                                </div>

                                <Button className="w-full h-12 text-lg font-bold bg-[#E31E24] hover:bg-[#c4151a] shadow-lg shadow-red-500/20">
                                    Send Request
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
