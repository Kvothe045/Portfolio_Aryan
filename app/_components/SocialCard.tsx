// app/_components/SocialCard.tsx
import { ArrowUpRight } from "lucide-react";

interface SocialCardProps {
  platform: "LinkedIn" | "GitHub" | "LeetCode" | "Codeforces";
  handle: string;
  link: string;
  stats: string;
  color: string;
}

export default function SocialCard({ platform, handle, link, stats, color }: SocialCardProps) {
  // Dynamic gradient based on brand colors
  const gradients: any = {
    LinkedIn: "from-blue-600 to-blue-900",
    GitHub: "from-gray-700 to-black",
    LeetCode: "from-yellow-600 to-orange-700",
    Codeforces: "from-red-600 to-red-900",
  };

  return (
    <a href={link} target="_blank" className="block w-full group relative">
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradients[platform]} p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]`}>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
        
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-white">{platform}</h3>
            <p className="text-sm text-white/70 mb-4">@{handle}</p>
            
            <div className="inline-block px-3 py-1 bg-black/30 backdrop-blur-md rounded-lg border border-white/10">
              <span className="text-sm font-mono text-white font-semibold">{stats}</span>
            </div>
          </div>
          
          <ArrowUpRight className="text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </a>
  );
}