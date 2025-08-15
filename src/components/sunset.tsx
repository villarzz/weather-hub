import sunset from "../../public/assets/sunset.png";
import { useWeather } from "../context/WeatherProvider";
import { formatarData } from "../utils/utils";

export default function Sunset() {
    const { loading, weatherData } = useWeather();

    if (loading || !weatherData) {
        return (
            <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 animate-pulse" />
        );
    }
    
    return (
        <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={sunset} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-2xl font-semibold whitespace-nowrap">Pôr do sol</p>
                    <p className="text-zinc-100">{formatarData(weatherData.location.localtime)}</p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-col text-center">
                    <div className="flex">
                        <p className="text-7xl font-semibold text-zinc-100 leading-none">
                        {weatherData.forecast.forecastday[0].astro.sunset.split(" ")[0]}
                            <span className="text-3xl"> PM</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}