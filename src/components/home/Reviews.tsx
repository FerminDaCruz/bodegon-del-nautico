import TrustindexWidget from "./TrustindexWidget";
import ScrollReveal from "../ScrollReveal";

export default function Reviews() {
    return (
        <ScrollReveal animation="fade-in-up" delay={0.2}>
            <div className=" w-full p-10 bg-white flex items-start justify-center ">
                <TrustindexWidget />
            </div>
        </ScrollReveal>
    );
}
