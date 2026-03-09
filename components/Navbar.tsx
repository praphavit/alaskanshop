import Image from "next/image"
import { User, Menu, Search } from "lucide-react"

export default function Navbar() {
    return (
        <div className="relative z-50 w-full h-[120px] flex items-start justify-center">

            {/* Background Container */}
            <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center">
                <div className="relative w-full h-full max-w-[1920px]">
                    <Image
                        src="/images/navbar/Asset 18.png"
                        fill
                        alt="navbar background"
                        className="object-contain object-top"
                        priority
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative w-full max-w-[1200px] h-full flex items-start justify-between px-16 lg:px-32 pt-7">

                {/* Left Section: Nav Links */}
                <div className="flex items-center gap-4 lg:gap-10 text-[#2D3E50] font-bold text-xs lg:text-sm">
                    <div className="relative">
                        <a href="#" className="hover:text-cyan-500 transition-colors uppercase">หน้าแรก</a>
                        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400"></div>
                    </div>
                    <a href="#" className="hover:text-cyan-500 transition-colors uppercase">เติมเกม</a>
                    <a href="#" className="hover:text-cyan-500 transition-colors uppercase">ข่าวสาร</a>
                </div>

                {/* Right Section: Brand Logo, Login, and Icons */}
                <div className="flex items-center gap-3 lg:gap-4">

                    {/* Brand Image (Asset 14.png) */}
                    <div className="relative w-[130px] lg:w-[160px] h-[35px] hidden md:block">
                        <Image
                            src="/images/navbar/Asset 14.png"
                            fill
                            alt="ALASKAN TOPUP GAME ONLINE"
                            className="object-contain"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="flex items-center gap-2 bg-[#00D4FF] text-white px-3 py-1.5 rounded-lg font-bold text-[10px] lg:text-xs hover:bg-cyan-400 transition-all shadow-[0px_4px_10px_rgba(0,212,255,0.3)] whitespace-nowrap">
                        <User size={14} />
                        <span className="hidden sm:inline">เข้าสู่ระบบ</span>
                    </button>

                    {/* Utils Icons */}
                    <div className="flex items-center gap-2 text-[#00D4FF]">
                        <button className="hover:scale-110 transition-transform cursor-pointer">
                            <Menu size={18} />
                        </button>
                        <button className="hover:scale-110 transition-transform cursor-pointer">
                            <Search size={18} />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}