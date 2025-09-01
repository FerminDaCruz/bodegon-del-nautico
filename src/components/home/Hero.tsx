import Image from "next/image";
import GuruBadge from "../logos/RestaurantGuru";
import TripAdvisorBadgeStatic from "../logos/Tripadvisor";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoTripAdvisor } from "react-icons/bi";
import Wave from "@/svg/wave-haikei.svg";
import { MdLocationOn } from "react-icons/md";

export default function Hero() {
    return (
        <div className="h-dvh w-full overflow-hidden">
            <div
                className="h-full w-full relative overflow-hidden bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('images/beautiful-lake-restaurant-with-boats-and-sunset.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                {/*<Image
                src="/images/wave-haikei.png"
                width={2000}
                height={2000}
                alt="olas decoracion"
                className="absolute z-20 -bottom-10 left-0 w-full h-auto"
            />*/}
                <Image
                    src="/svg/wave-haikei-2.svg"
                    alt="olas decoracion"
                    width={2000}
                    height={200}
                    className="hidden md:block absolute z-10 -bottom-10 left-0 w-full h-[1000px] object-cover"
                />
                <Image
                    src="/svg/wave-haikei-3.svg"
                    alt="olas decoracion"
                    width={2000}
                    height={200}
                    className="block md:hidden absolute z-10 -bottom-10 xl:bottom-0 left-0 w-full h-[1000px] object-cover"
                />

                <div className="absolute z-10 top-25 right-5">
                    <div className="flex gap-4 text-2xl justify-self-end text-white">
                        <Link href="/">
                            <MdLocationOn className="transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_white]" />
                        </Link>
                        <Link href="/">
                            <FaFacebook className="transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_white]" />
                        </Link>
                        <Link href="/">
                            <FaInstagram className="transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_white]" />
                        </Link>
                        <Link href="/">
                            <BiLogoTripAdvisor className="transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_white]" />
                        </Link>
                    </div>
                </div>
                <div className="relative z-10 top-1/2 left-1/2 transform -translate-1/2 text-white flex flex-col items-center text-center font-atkinson max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                    <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4">
                        Bienvenidos a
                    </h2>

                    <div className="mb-4 text-center">
                        <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">
                            El bodegón del náutico
                        </h1>
                        <hr className="my-2 border-white" />
                        <div className="flex w-full justify-evenly items-center sm:gap-2 uppercase text-sm sm:text-base md:text-lg flex-wrap">
                            <p>restaurante</p>
                            <p>-</p>
                            <p>almacén</p>
                            <p>-</p>
                            <p>delicatessen</p>
                        </div>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg mb-8">
                        La mejor gastronomía de Bariloche
                    </p>
                    <div className="flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12">
                        <a
                            href="https://www.tripadvisor.com.ar/Restaurant_Review-g312848-d20317444-Reviews-El_Bodegon_del_Nautico-San_Carlos_de_Bariloche_Province_of_Rio_Negro_Patagonia.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                        >
                            <Image
                                src="/logos/tripadvisor-logo.png"
                                alt="tripadvisor galardon"
                                width={300}
                                height={300}
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
                            />
                        </a>

                        <a
                            href="https://restaurantguru.com/El-Bodegon-del-Nautico-San-Carlos-de-Bariloche"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                        >
                            <Image
                                src="/logos/guru-logo.png"
                                alt="guru galardon"
                                width={300}
                                height={300}
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
                            />
                        </a>
                    </div>
                    <button className="mt-5 px-6 py-4 bg-white/10 backdrop-blur-xs border border-white/30 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-lg">
                        Ver Menú
                    </button>
                </div>
            </div>
        </div>
    );
}
