import Image from "next/image";
import gameBgImg from "@/public/images/background/game_bg_alaskan.png";
import Link from "next/link"; // For making them clickable later if needed

// Game data array
const games = [
    { id: 1, name: "Free Fire", src: "/images/games/FREE FIRE.png", link: "#" },
    { id: 2, name: "ROV", src: "/images/games/ROV.png", link: "#" },
    { id: 3, name: "Mobile Legends", src: "/images/games/MLBB.png", link: "#" },
    { id: 4, name: "Call of Duty", src: "/images/games/CALL OF DUTY.png", link: "#" },
    { id: 5, name: "PUBG Mobile", src: "/images/games/PUBG MOBILE.png", link: "#" },
    { id: 6, name: "Delta Force", src: "/images/games/DELTA FORCE.png", link: "#" },
    { id: 7, name: "FC Mobile", src: "/images/games/FC MOBILE.png", link: "#" },
    { id: 8, name: "eFootball", src: "/images/games/E FOOTBALL.png", link: "#" },
    { id: 9, name: "Heartopia", src: "/images/games/HEARTOPIA.png", link: "#" },
];

export default function ProductGrid() {
    return (
        <section className="relative w-full flex items-center justify-center bg-[#F5F7F8]">
            <div className="relative w-full max-w-[1920px]">
                {/* 1. Background Image layered at the back */}
                <Image
                    src={gameBgImg}
                    alt="Alaskan Shop Game Background"
                    className="w-full h-auto"
                />

                {/* 2. Foreground Grid Container overlapping the background */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 md:pt-16 lg:pt-20 pb-16 px-4 sm:px-8 md:px-16 lg:px-24">

                    {/* Header text */}
                    <h2 className="text-center text-[#556987] text-xl md:text-2xl lg:text-3xl font-bold mb-20 md:mb-28 lg:mb-36 drop-shadow-sm">
                        เลือกเกมที่ต้องการเติม
                    </h2>

                    {/* CSS Grid for the games */}
                    {/* 2 cols on mobile, 3 tablet, 4 desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 sm:gap-3 md:gap-4 lg:gap-1 w-full max-w-[1000px] mx-auto mt-4 md:mt-40">
                        {games.map((game) => (
                            <Link href={game.link} key={game.id} className="block w-full flex justify-center">
                                <div className="relative w-full aspect-[5/4] transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl">
                                    <Image
                                        src={game.src}
                                        alt={game.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
