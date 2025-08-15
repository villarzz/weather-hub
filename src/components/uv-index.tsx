import uv from "../../public/assets/uv.png";
import { useWeather } from "../context/WeatherProvider";

export default function UvIndex() {
    const { loading, weatherData } = useWeather();

    if (loading || !weatherData) {
        return (
            <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 animate-pulse" />
        )
    }

    return (
        <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={uv} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-xl font-semibold whitespace-nowrap">Indice UV</p>
                    <p className="text-zinc-200/80">
                        {weatherData.current.uv <= 2
                            ? "Baixo"
                            : weatherData.current.uv <= 5
                                ? "Moderado"
                                : weatherData.current.uv <= 7
                                    ? "Alto"
                                    : weatherData.current.uv <= 10
                                        ? "Muito Alto"
                                        : "Extremo"}
                    </p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-col text-center">
                    <div className="flex">
                        <p className="text-7xl font-semibold text-zinc-100 leading-none">
                            {weatherData.current.uv}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}