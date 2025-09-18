import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function Gallery() {
    const baseImages = [
        { src: "/images/1.jpg", alt: "Bodegón del Náutico" },
        { src: "/images/balc-1.jpg", alt: "Balcón del restaurante" },
        { src: "/images/balc-2.jpg", alt: "Vista del balcón" },
        { src: "/images/balc-3.jpg", alt: "Terraza del restaurante" },
        { src: "/images/2.webp", alt: "Platos del restaurante" },
        { src: "/images/3.webp", alt: "Cocina del restaurante" },
        { src: "/images/4.webp", alt: "Ambiente del restaurante" },
        {
            src: "/images/beautiful-lake-restaurant-with-boats-and-sunset.png",
            alt: "Vista del lago",
        },
    ];

    // Crear un grid perfecto de 4x4 (16 imágenes)
    const images = [];
    for (let i = 0; i < 16; i++) {
        const baseImage = baseImages[i % baseImages.length];
        images.push({
            ...baseImage,
            id: i,
        });
    }

    return (
        <section className=" bg-gray-900 py-16 lg:py-24  w-full">
            {/* Título de la sección */}
            <ScrollReveal animation="fade-in-up" delay={0.2}>
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                        Galería
                    </h2>
                </div>
            </ScrollReveal>

            {/* Galería tipo mosaico */}
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 h-auto">
                        {images.map((image, index) => (
                            <ScrollReveal
                                key={image.id}
                                animation="scale-in"
                                delay={0.1 + index * 0.05}
                            >
                                <div className="group relative overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:z-10 aspect-square">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 aspect-square"
                                    />

                                    {/* Overlay con efecto hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white font-semibold text-sm lg:text-base">
                                                {image.alt}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Efecto de brillo en hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            <ScrollReveal animation="bounce-in" delay={0.8}>
                <div className="my-10 w-full flex justify-center">
                    <Link
                        href="/"
                        className="text-center px-6 py-4 text-lg rounded-full border border-white/90 text-white bg-gray-800 transition-colors duration-300 hover:bg-gray-700 hover:border-white"
                    >
                        Ver menú
                    </Link>
                </div>
            </ScrollReveal>
        </section>
    );
}
