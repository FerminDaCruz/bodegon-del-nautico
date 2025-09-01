import Image from "next/image";

export default function TripAdvisorBadgeStatic({ size = 150 }) {
    return (
        <a
            href="https://www.tripadvisor.com.ar/Restaurant_Review-g312848-d20317444-Reviews-El_Bodegon_del_Nautico-San_Carlos_de_Bariloche_Province_of_Rio_Negro_Patagonia.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-${size} h-${size} overflow-hidden rounded-full flex-shrink-0`}
        >
            <Image
                src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2022_LL.png"
                alt="Tripadvisor Travelers’ Choice 2022"
                width={size}
                height={size}
                className="object-cover w-full h-full"
            />
        </a>
    );
}
