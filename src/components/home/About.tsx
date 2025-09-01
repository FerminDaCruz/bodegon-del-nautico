import Image from "next/image";

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
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold  mt-50 xl:mt-60  container text-center mx-auto text-white">
                Nuestra historia
            </h3>

            <div className="container mx-auto px-4 relative z-20 flex items-center py-10 text-white">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Imagen */}
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

                        {/* Texto */}
                        <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-center">
                            <div className="space-y-4">
                                <p className="text-lg  leading-relaxed">
                                    En el corazón de la costa, donde el mar se
                                    encuentra con la tradición culinaria, nace
                                    el Bodegón del Náutico. Desde nuestros
                                    inicios, hemos sido más que un restaurante;
                                    somos un lugar donde los sabores auténticos
                                    se fusionan con la hospitalidad que
                                    caracteriza a nuestra región.
                                </p>

                                <p className="text-lg  leading-relaxed">
                                    Nuestro compromiso es ofrecer una
                                    experiencia gastronómica única, donde cada
                                    plato cuenta una historia y cada ingrediente
                                    es seleccionado con el mismo cuidado que
                                    ponemos en cada detalle de nuestro servicio.
                                    Con años de experiencia y pasión por la
                                    cocina, nuestro equipo trabaja
                                    incansablemente para crear momentos
                                    inolvidables para nuestros comensales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
