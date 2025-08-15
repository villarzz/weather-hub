import windSpeed from "../../public/assets/storm.png";
import { useWeather } from "../context/WeatherProvider";

export default function WindSpeed() {
    const { loading, weatherData } = useWeather();

    if (loading || !weatherData) {
        return (
            <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 animate-pulse" />
        )
    }

    return (
        <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={windSpeed} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-xl font-semibold whitespace-nowrap">Velocidade do vento</p>
                    <p className="text-zinc-200/80">
                        {Math.floor(weatherData.current.wind_kph) <= 5
                            ? "Calmo"
                            : Math.floor(weatherData.current.wind_kph) <= 20
                                ? "Fraco"
                                : Math.floor(weatherData.current.wind_kph) <= 40
                                    ? "Moderado"
                                    : Math.floor(weatherData.current.wind_kph) <= 60
                                        ? "Forte"
                                        : "Muito Forte"}
                    </p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <p className="text-zinc-100 font-semibold text-center">
                    <span className="font-semibold text-7xl">
                        {Math.floor(weatherData.current.wind_kph)}
                    </span>
                    <span className="text-5xl"> km/h</span>
                </p>
            </div>
        </div>
    );

}