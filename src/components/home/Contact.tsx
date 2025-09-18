"use client";

import { FiMapPin, FiClock, FiPhone, FiMail } from "react-icons/fi";
import ScrollReveal from "../ScrollReveal";

export default function Visitanos() {
    return (
        <section className="w-full bg-gray-900 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <ScrollReveal animation="fade-in-up" delay={0.2}>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-12 text-center">
                        Visítanos
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* Google Maps */}
                    <ScrollReveal animation="fade-in-left" delay={0.3}>
                        <div className="w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12021.279420133233!2d-71.353989!3d-41.127543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b6ef2393a11%3A0xcd9c5888ab440420!2sEl%20Bodeg%C3%B3n%20del%20N%C3%A1utico!5e0!3m2!1ses!2sus!4v1758229316151!5m2!1ses!2sus"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </ScrollReveal>

                    {/* Info */}
                    <ScrollReveal animation="fade-in-right" delay={0.4}>
                        <div className="flex flex-col justify-center space-y-6 text-gray-200">
                            <ScrollReveal animation="fade-in-up" delay={0.5}>
                                <div className="flex items-start space-x-4">
                                    <FiMapPin className="text-white w-6 h-6 shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Dirección
                                        </h3>
                                        <p>
                                            Av. Exequiel Bustillo 3 500,
                                            Bariloche, Río Negro, Argentina
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-in-up" delay={0.6}>
                                <div className="flex items-start space-x-4">
                                    <FiClock className="text-white w-6 h-6 shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Horarios
                                        </h3>
                                        <p>
                                            Martes a Domingo: 12:30 a 16:30 -
                                            18:00 a 11:30
                                        </p>
                                        <p>Lunes: 12:30 a 16:30</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-in-up" delay={0.7}>
                                <div className="flex items-start space-x-4">
                                    <FiPhone className="text-white w-6 h-6 shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Teléfono
                                        </h3>
                                        <a
                                            href="tel:+5492944123456"
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            +54 9 2944 60-0274
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-in-up" delay={0.8}>
                                <div className="flex items-start space-x-4">
                                    <FiMail className="text-white w-6 h-6 shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:info@tusitio.com"
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            bodegondelnautico@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
