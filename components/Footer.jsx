import Image from "next/image";
import contactBgImg from "@/public/images/background/contact_bg_alaskan.png";

export default function Footer() {
    return (
        <footer className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[1920px]">
                <Image
                    src={contactBgImg}
                    alt="Alaskan Shop Contact Background"
                    className="w-full h-auto"
                />

                {/* 1920x200 Cyan Bar below background */}
                <div className="w-full h-[60px] md:h-[120px] lg:h-[200px] bg-[#00D4FF]"></div>

                {/* Footer Content Overlay */}
                <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                    {/* Top Content: About Us & Fanpage */}
                    <div className="absolute top-20 md:top-28 lg:top-36 left-0 px-6 sm:px-10 md:px-32 lg:px-32 pointer-events-auto">
                        <div className="max-w-md">
                            <div className="relative inline-block mb-3">
                                <h3
                                    className="text-sm md:text-base font-bold text-gray-600 underline decoration-gray-400 underline-offset-4"
                                    style={{ fontFamily: "'Kanit', sans-serif" }}
                                >
                                    เกี่ยวกับเรา
                                </h3>
                                <div className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gray-400"></div>
                            </div>
                            <p
                                className="text-[10px] md:text-xs lg:text-sm text-gray-500 leading-relaxed"
                                style={{ fontFamily: "'Kanit', sans-serif" }}
                            >
                                ALASKAN เราให้บริการในฐานะตัวแทนจำหน่ายเติมเกมอย่างเป็นทางการ
                                <br />
                                เราคัดสรรเฉพาะช่องทางที่ถูกกฎหมายและปลอดภัยสูงสุด
                                <br />
                                เพื่อส่งต่อความคุ้มค่าจากพาร์ทเนอร์ตรงถึงมือคุณ พร้อมการดูแลระดับมืออาชีพในทุกขั้นตอน
                            </p>

                            {/* Facebook Fanpage Section */}
                            <div className="mt-4 w-full max-w-[450px] flex flex-col items-center">
                                <h4
                                    className="text-cyan-400 font-bold text-[10px] md:text-xs mb-3 uppercase tracking-wider"
                                    style={{ fontFamily: "'Kanit', sans-serif" }}
                                >
                                    FACEBOOK FANPAGE
                                </h4>
                                <div className="w-full h-24 md:h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg">
                                    {/* Fanpage Preview Placeholder */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row Overlay (Sits on top of the Cyan Bar) */}
                    <div className="absolute bottom-[12%] md:bottom-[18%] lg:bottom-[30%] w-full left-0 px-6 sm:px-10 md:px-32 lg:px-32 flex flex-wrap items-center gap-6 md:gap-11 pointer-events-auto">
                        {/* Contact Section */}
                        <div className="flex items-center gap-3">
                            <span
                                className="text-black/80 font-bold text-xs md:text-sm"
                                style={{ fontFamily: "'Kanit', sans-serif" }}
                            >
                                ติดต่อเรา:
                            </span>
                            <div className="flex items-center gap-2">
                                <a href="mailto:support@alaskan.com" className="hover:scale-110 transition-transform">
                                    <Image src="/images/footer/mail_asset1 1.png" width={24} height={24} alt="Mail" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform">
                                    <Image src="/images/footer/line_asset1 1.png" width={24} height={24} alt="Line" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform">
                                    <Image src="/images/footer/facebook_asset1 1.png" width={24} height={24} alt="Facebook" />
                                </a>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 md:gap-10">
                            <a
                                href="#"
                                className="text-black/80 hover:text-white text-xs md:text-sm font-medium transition-colors"
                                style={{ fontFamily: "'Kanit', sans-serif" }}
                            >
                                เงื่อนไขการให้บริการ
                            </a>
                            <a
                                href="#"
                                className="text-black/80 hover:text-white text-xs md:text-sm font-medium transition-colors"
                                style={{ fontFamily: "'Kanit', sans-serif" }}
                            >
                                นโยบายความเป็นส่วนตัว
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

