import { LuWind } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";
import PartlyCloudy from "../../public/assets/PartlyCloudy.svg";
import Rainy from "../../public/assets/Rainy.svg";
import RainThunder from "../../public/assets/RainThunder.svg";
import Snowy from "../../public/assets/Snowy.svg";
import Sunny from "../../public/assets/Sunny.svg";
import { useWeather } from "../context/WeatherProvider";

export default function CurrentWeather() {
    const { loading, weatherData } = useWeather();

    if (loading || !weatherData) {
        return (
            <div className="h-[400px] rounded-xl bg-sky-900/50 animate-pulse" />
        )
    }

    function formatarData(dataStr: string): string {
        const [data, hora] = dataStr.split(" ");
        const [ano, mes, dia] = data.split("-");

        return `${dia}/${mes}/${ano} ${hora}`;
    }

    const conditionIcons: Record<string, string> = {
        "Parcialmente nublado": PartlyCloudy,
        "Sunny": Sunny,
        "Rain": Rainy,
        "Snowy": Snowy,
        "RainThunder": RainThunder
    };
    const conditionText = weatherData.current.condition.text;
    const weatherIcon = conditionIcons[conditionText];

    return (
        <div className="h-[400px] rounded-xl bg-sky-900/50 flex flex-col justify-evenly">
            <div className="pl-4">
                <p className="font-bold text-zinc-200 text-xl tracking-wide">Clima Atual</p>
                <p className="text-zinc-200">{formatarData(weatherData.location.localtime)}</p>
            </div>
            <div className="flex items-centers gap-9">
                <img src={weatherIcon} alt="" width={150} className="ml-2" />
                <div className="flex flex-col text-center items-center">
                    <div className="flex">
                        <p className="text-8xl font-semibold text-zinc-100 leading-none">
                            {Math.floor(weatherData.current.temp_c)}
                        </p>
                        <span className="text-zinc-100 text-2xl font-semibold ml-1 mt-1">°C</span>
                    </div>
                    <p className="font-semibold text-zinc-100">{weatherData.current.condition.text}</p>
                </div>
            </div>
            <div className="mx-3 flex justify-around p-2">
                <div className="flex flex-col items-center gap-1">
                    <IoWaterOutline className="text-zinc-200 text-3xl" />
                    <p className="text-white">{weatherData.current.humidity}%</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <LuWind className="text-zinc-200 text-3xl" />
                    <p className="text-white">{weatherData.current.wind_kph} km/h</p>
                </div>
            </div>
        </div>
    )
}