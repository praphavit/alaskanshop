import Image from "next/image";
import headerImg from "@/public/images/background/header1_web_alaskan.png";

export default function Hero() {
    return (
        <section className="relative w-full flex items-start justify-center -mt-[120px]">
            <div className="relative w-full max-w-[1920px]">
                <Image
                    src={headerImg}
                    alt="Alaskan Shop Header"
                    priority
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}
