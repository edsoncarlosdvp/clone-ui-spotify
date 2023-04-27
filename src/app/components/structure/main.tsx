import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Main(): JSX.Element {
    return (
        <main className="flex-1 p-6">
            <div className="flex-1 items-center gap-4">
                <button className="rounded-full bg-black/40 p-1" aria-label="Voltar tela">
                    <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1" aria-label="Avançar tela">
                    <ChevronRight />
                </button>
            </div>
            <h1 className="font-semibold text-3xl mt-10">Bom dia!</h1>
            <div className="grid grid-cols-3 gap-4">
                <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-3">
                    <Image src="/album_mj_dangerous.jpg" width={104} height={104} alt="Capa de álbum" />
                    <strong>Dangerous</strong>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-3">
                    <Image src="/album_mj_dangerous.jpg" width={104} height={104} alt="Capa de álbum" />
                    <strong>Dangerous</strong>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-3">
                    <Image src="/album_mj_dangerous.jpg" width={104} height={104} alt="Capa de álbum" />
                    <strong>Dangerous</strong>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-3">
                    <Image src="/album_mj_dangerous.jpg" width={104} height={104} alt="Capa de álbum" />
                    <strong>Dangerous</strong>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-3">
                    <Image src="/album_mj_dangerous.jpg" width={104} height={104} alt="Capa de álbum" />
                    <strong>Dangerous</strong>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors pr-3">
                    <Image src="/album_mj_dangerous.jpg" width={104} height={104} alt="Capa de álbum" />
                    <strong>Dangerous</strong>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
            </div>

            <h2 className="font-semibold text-2xl mt-10">Selecionados para você</h2>

            <div className="grid grid-cols-5 gap-4 mt-4">
                <a href="#" className="group bg-white/5 rounded-md flex flex-col gap-2">
                    <Image src="/album_mj_dangerous.jpg" className="w-full" width={104} height={104} alt="Capa de álbum" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span>Michael Jackson, Jojo, Phill Collins, Tears For Fears, Ah Ha!...</span>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded-md flex flex-col gap-2">
                    <Image src="/album_mj_dangerous.jpg" className="w-full" width={104} height={104} alt="Capa de álbum" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span>Michael Jackson, Jojo, Phill Collins, Tears For Fears, Ah Ha!...</span>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded-md flex flex-col gap-2">
                    <Image src="/album_mj_dangerous.jpg" className="w-full" width={104} height={104} alt="Capa de álbum" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span>Michael Jackson, Jojo, Phill Collins, Tears For Fears, Ah Ha!...</span>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded-md flex flex-col gap-2">
                    <Image src="/album_mj_dangerous.jpg" className="w-full" width={104} height={104} alt="Capa de álbum" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span>Michael Jackson, Jojo, Phill Collins, Tears For Fears, Ah Ha!...</span>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
                <a href="#" className="group bg-white/5 rounded-md flex flex-col gap-2">
                    <Image src="/album_mj_dangerous.jpg" className="w-full" width={104} height={104} alt="Capa de álbum" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span>Michael Jackson, Jojo, Phill Collins, Tears For Fears, Ah Ha!...</span>
                    <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto" aria-label="Play">
                        <Play />
                    </button>
                </a>
            </div>
        </main>
    )
}