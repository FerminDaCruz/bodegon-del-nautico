import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function About() {
    return (
        <div className="relative  w-full bg-gray-900 overflow-hidden">
            <Image
                src="/svg/wave-haikei-top.svg"
                alt="olas decoracion"
                width={2000}
                height={200}
                className="block absolute z-10 -top-10 left-0 w-full h-[1000px] xl:h-[1500px] object-cover "
            />
            <ScrollReveal animation="fade-in-up" delay={0.2}>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold  mt-50 xl:mt-60  container text-center mx-auto text-white">
                    Nuestra historia
                </h3>
            </ScrollReveal>

            <div className="container mx-auto px-4 relative z-20 flex items-center py-10 text-white">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Imagen */}
                        <ScrollReveal animation="scale-in" delay={0.3}>
                            <div className="order-2 lg:order-1">
                                <div className="relative rounded-lg overflow-hidden shadow-2xl h-full">
                                    <Image
                                        src="/images/1.jpg"
                                        alt="Bodegón del Náutico"
                                        width={600}
                                        height={400}
                                        className="w-full h-[300px] md:h-[400px] lg:h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Texto */}
                        <ScrollReveal animation="fade-in-left" delay={0.4}>
                            <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-center">
                                <div className="space-y-4">
                                    <p className="text-lg  leading-relaxed">
                                        Ubicado sobre{" "}
                                        <span className="font-bold">
                                            Av. Bustillo Km 3.500
                                        </span>{" "}
                                        (a minutos del centro de la ciudad) el
                                        Bodegón del Náutico es sin dudas uno de
                                        los lugares más bonitos para comer de
                                        todo Bariloche.
                                    </p>

                                    <p className="text-lg  leading-relaxed">
                                        Nuestra situación privilegiada dentro
                                        del Club Náutico Bariloche nos ubica
                                        como ningún otro establecimiento
                                        gastronómico en toda la ciudad. Mientras
                                        algunos pueden tener una excelente vista
                                        al lago, nosotros estamos literalmente
                                        sobre él. Buscamos crear un lugar de
                                        encuentro para los amigos y las
                                        familias. Donde se pueda tomar algo y
                                        comer rico, planteando diferentes
                                        opciones para el día y la noche. Somos
                                        el punto neurálgico de la vida social
                                        del Náutico y la ciudad de Bariloche.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
