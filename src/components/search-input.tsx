import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
    return (
        <>
            <div className="bg-sky-900/50 p-2 rounded-xl w-[400px] flex items-center gap-1">
                <CiSearch className="text-3xl text-zinc-200" />
                <input type="text" placeholder="Procure por lugares" className="w-full p-1 rounded-xl focus:border-none focus:outline-none placeholder-zinc-300/80"/>
            </div>
        </>
    )
}