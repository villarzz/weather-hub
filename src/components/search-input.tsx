import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
    return (
        <>
            <div className="bg-zinc-600/50 p-2 rounded w-96 flex items-center gap-1">
                <CiSearch className="text-2xl" />
                <input type="text" placeholder="Procure por lugares" />
            </div>
        </>
    )
}