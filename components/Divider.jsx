import Image from "next/image";
import featureImg from "@/public/images/features/Asset 15.png";

export default function Divider() {
    return (
        <section
            className="relative w-full flex items-center justify-center z-10 pointer-events-none"
            style={{
                marginTop: 'max(-2.75vw, -53.5px)',
                marginBottom: 'max(-2.75vw, -53.5px)'
            }}
        >
            <div className="relative w-full max-w-[1920px]">
                <Image
                    src={featureImg}
                    alt="Alaskan Shop Features"
                    className="w-full h-auto" // Image scales with the container
                />
            </div>
        </section>
    );
}
