import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";

const apiKey = import.meta.env.VITE_API_KEY;
interface City {
    id: number
    name: string
    region: string
    country: string
    lat: number
    lon: number
    url: string
}

interface SearchInputProps {
    onSelect: (lat: number, lon: number) => void;
}

export default function SearchInput({ onSelect }: SearchInputProps) {
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [citiesResponse, setCitiesResponse] = useState<City[]>([]);

    useEffect(() => {
        if (searchTerm.trim() === "") return;

        const delayDebounce = setTimeout(() => {
            fetchData(searchTerm);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    const fetchData = async (search: string) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${encodeURIComponent(search)}&lang=pt`
            );
            const data = await response.json();
            setCitiesResponse(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            console.error("Termo buscado:", search);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);   // mostra no input
        setSearchTerm(value);   // dispara busca
    };

    const handleSelect = (city: City) => {
        setInputValue(city.name);  // mostra cidade escolhida no input
        setCitiesResponse([]);     // esconde lista
        onSelect(city.lat, city.lon);
    };

    return (
        <div className="relative w-[400px]">
            {/* INPUT */}
            <div className="bg-sky-900/50 p-2 rounded-xl flex items-center gap-1 hover:bg-sky-800/50">
                <CiSearch className="text-3xl text-zinc-200" />
                <input
                    type="text"
                    placeholder="Procure por lugares"
                    className="w-full p-1 rounded-xl focus:border-none focus:outline-none placeholder-zinc-300/80 caret-sky-100 text-white"
                    onChange={handleChange}
                    value={inputValue}
                />
                {citiesResponse.length > 0 &&
                    <button
                        onClick={() => setCitiesResponse([])}
                        className="hover:text-zinc-200 hover:cursor-pointer"
                    >
                        <MdOutlineCancel className="text-zinc-100 text-2xl" />
                    </button>
                }
            </div>

            {/* AUTOCOMPLETE */}
            {citiesResponse.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto z-10">
                    {citiesResponse.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-sky-100 cursor-pointer text-zinc-800"
                            onClick={() => handleSelect(item)}
                        >
                            {item.name} - {item.region}, {item.country}
                        </li>
                    ))}
                </ul>
            )}

            {/* Loading */}
            {loading && (
                <p className="absolute mt-2 text-sm text-zinc-400">Carregando...</p>
            )}
        </div>
    );
}
