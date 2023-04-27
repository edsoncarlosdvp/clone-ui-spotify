import { Home, Library, Search } from "lucide-react";

export default function Aside(): JSX.Element {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className="space-y-5">
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Home />
                    Inicio
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Search />
                    Busca
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Library />
                    Biblioteca
                </a>
            </nav>
            <nav className="mt-6 pt-6 border-t bg-zinc-800 flex flex-col gap-3">
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
                <a href="#" className="text-sm text-400 hover:text-zinc-100">Playlist</a>
            </nav>
        </aside>
    )
}