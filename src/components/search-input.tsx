import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import * as Tooltip from "@radix-ui/react-tooltip";

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
    onViewOwnLocation: () => void;
    onSelect: (lat: number, lon: number) => void;
}

export default function SearchInput({ onSelect, onViewOwnLocation }: SearchInputProps) {
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

    function handleGoBackLocation(){
        onViewOwnLocation();
        setInputValue("");
    }

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
        setInputValue(value);
        setSearchTerm(value);
    };

    const handleSelect = (city: City) => {
        setInputValue(city.name)
        setCitiesResponse([]);
        onSelect(city.lat, city.lon);
    };

    return (
        <div className="relative w-full">
            <div className="flex justify-between items-center gap-3">
                <div className="bg-sky-900/50 p-2 rounded-xl flex items-center gap-1 hover:bg-sky-800/50 w-full">
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
                {inputValue &&
                    <Tooltip.Provider>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <button className="bg-sky-900/50 p-2 rounded-xl hover:bg-sky-800/50 text-zinc-200" onClick={handleGoBackLocation}>
                                    <CiLocationOn className="text-3xl" />
                                </button>
                            </Tooltip.Trigger>

                            <Tooltip.Portal>
                                <Tooltip.Content
                                    className="bg-zinc-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg"
                                    side="top"
                                    sideOffset={5}
                                >
                                    Voltar para minha localização
                                    <Tooltip.Arrow className="fill-zinc-800" />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                }
            </div>

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

            {loading && (
                <p className="absolute mt-2 text-sm text-zinc-400">Carregando...</p>
            )}
        </div>
    );
}
