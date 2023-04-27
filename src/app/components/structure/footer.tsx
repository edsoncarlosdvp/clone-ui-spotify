import { Laptop2, LayoutList, Maximize2, Mic, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export default function footer(): JSX.Element {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/album_mj_dangerous.jpg" className="w-full" width={56} height={56} alt="Capa de álbum" />
                <div className="flex flex-col w-24">
                    <strong className="font-normal">Remember The Time</strong>
                    <span className="text-xs text-zinc-400">Michael Jackson</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle className="text-zinc-200" size={20} />
                    <SkipBack className="text-zinc-200" size={20} />
                    <button type="button" aria-label="Play" className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                        <Play />
                    </button>
                    <SkipForward className="text-zinc-200" size={20} />
                    <Repeat className="text-zinc-200" size={20} />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-200">1:20</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-400">2:35</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Mic size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className="flex items-center gap-4">
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-10 rounded-full"></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}