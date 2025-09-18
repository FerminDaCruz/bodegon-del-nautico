import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";

export default function Home() {
    return (
        <>
            <Hero />
            <Reviews />
            <About />
            <Contact />
            <Gallery />
        </>
    );
}
