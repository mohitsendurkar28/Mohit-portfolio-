import { profileInfo } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold tracking-tighter">MOHIT SENDURKAR</h2>
                    <p className="text-white/50 text-sm mt-1">{profileInfo.title}</p>
                </div>
                <div className="text-sm text-white/50 text-center md:text-right">
                    {/* Replaced the unstable new Date() with the hardcoded year */}
                    © 2026 All rights reserved. <br />
                    Built with Next.js & Tailwind CSS
                </div>
            </div>
        </footer>
    );
}