import Image from "next/image";
import serviceBgImg from "@/public/images/background/service_bg_alaskan.png";

const benefits = [
    {
        id: 1,
        title: "ความคุ้มค่า (Best Value)",
        description:
            "ประหยัดกว่าเติมเองสูงสุด 10-30% เรามีพาร์ทเนอร์และช่องทางพิเศษ\nทำให้ได้ราคาต้นทุนที่ต่ำกว่า เพื่อส่งต่อความประหยัดให้เกมเมอร์\nไม่ใช่แค่ถูกครั้งเดียว แต่เรามีกิจกรรมและส่วนลด On-top ให้ลูกค้าประจำเสมอ",
        icon: "/images/benefits/benefit_asset1.png",
        align: "right",
    },
    {
        id: 2,
        title: "ระบบเติมไว รวดเร็ว (Instant Delivery)",
        description:
            'ระบบอัตโนมัติ 24 ชม. ไม่ต้องรอแอดมินตอบ เติมเสร็จปุ๊บ ของเข้าปั๊บ\nพร้อมลุยต่อได้ทันที เราเข้าใจว่า "จังหวะของมันต้องมี"',
        icon: "/images/benefits/benefit_asset2.png",
        align: "left",
    },
    {
        id: 3,
        title: "บริการดี (Premium Support)",
        description:
            "หากเกิดปัญหาหรือข้อสงสัย ทีม Support พร้อมช่วยเหลือคุณด้วยความเข้าใจ\nรับประกันความปลอดภัย เติมสะอาด ปลอดภัย ไร้ความเสี่ยงโดนแบน\nเพราะเราใช้ช่องทางที่ถูกต้องตามกฎระเบียบของเกม",
        icon: "/images/benefits/benefit_asset3.png",
        align: "right",
    },
];

export default function DetailedBenefits() {
    return (
        <section className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[1920px]">
                {/* Background Image */}
                <Image
                    src={serviceBgImg}
                    alt="Alaskan Shop Service Background"
                    className="w-full h-auto"
                />

                {/* Cards Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
                    {/* Section Heading */}
                    <h2
                        className="text-base md:text-lg lg:text-xl font-bold text-gray-600 tracking-wide text-center mb-4 md:mb-6"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                    >
                        เหตุผลที่เกมเมอร์ตัวจริงเลือก{" "}
                        <span className="text-cyan-400 font-extrabold tracking-widest">ALASKAN</span>
                    </h2>

                    {/* Benefits Cards */}
                    <div className="flex flex-col space-y-5 md:space-y-6 w-full max-w-4xl">
                        {benefits.map((benefit) => (
                            <div key={benefit.id} className="relative group">
                                {/* Cyan Accent Line */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>

                                <div className={`flex flex-col ${benefit.align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center bg-white/10 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 rounded-[40px] p-6 md:p-8 transition-all hover:shadow-[0_20px_60px_rgba(0,196,255,0.15)]`}>

                                    {/* Text Content */}
                                    <div className="max-w-lg text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                            <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-500 text-[10px] font-bold">
                                                {benefit.id === 1 ? '$' : benefit.id === 2 ? '⚡' : '🛡️'}
                                            </div>
                                            <h3
                                                className="text-lg md:text-xl lg:text-2xl font-bold text-cyan-500"
                                                style={{ fontFamily: "'Kanit', sans-serif" }}
                                            >
                                                {benefit.title}
                                            </h3>
                                        </div>
                                        <p className="text-[#656565] text-xs md:text-sm leading-relaxed font-medium whitespace-pre-line">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Icon Container */}
                                    <div className={`relative w-32 h-32 md:w-40 md:h-36 flex-shrink-0 mt-4 md:mt-0 ${benefit.align === 'right' ? 'md:ml-8' : 'md:mr-8'}`}>
                                        <Image
                                            src={benefit.icon}
                                            alt={benefit.title}
                                            fill
                                            className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
