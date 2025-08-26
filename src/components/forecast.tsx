import { formatarDataEHora } from "../utils/utils";
import Rainy from "../../public/assets/Rainy-Bulk.svg";
import Snowy from "../../public/assets/Snowy-Bulk.svg";
import Sunny from "../../public/assets/Sunny-Bulk.svg";
import { useWeather } from "../context/WeatherProvider";
import RainThunder from "../../public/assets/RainThunder-Bulk.svg";
import PartlyCloudy from "../../public/assets/PartlyCloudy-Bulk.svg";

export default function Forecast() {
    const { loading, weatherData } = useWeather();

    if (loading || !weatherData) {
        return (
            <div className="h-[450px] rounded-xl bg-sky-900/50 p-5 flex flex-col" />
        )
    }

    const conditionIcons: Record<string, string> = {
        "Parcialmente nublado": PartlyCloudy,
        "Encoberto": PartlyCloudy,
        "Possibilidade de chuva irregular": PartlyCloudy,
        "Sol": Sunny,
        "Rain": Rainy,
        "Chuva moderada": Rainy,
        "Chuva forte": Rainy,
        "Snowy": Snowy,
        "RainThunder": RainThunder
    };
    const conditionTextDayOne = weatherData.forecast.forecastday[0].day.condition.text;
    const conditionTextDayTwo = weatherData.forecast.forecastday[1].day.condition.text;
    const conditionTextDayTheree = weatherData.forecast.forecastday[2].day.condition.text;
    const weatherIconDayOne = conditionIcons[conditionTextDayOne];
    const weatherIconDayTwo = conditionIcons[conditionTextDayTwo];
    const weatherIconDayTheree = conditionIcons[conditionTextDayTheree];

    return (
        <div className="h-[450px] rounded-xl bg-sky-900/50 p-5 flex flex-col">
            <div className="mb-5">
                <p className="text-zinc-100 text-lg font-semibold">Previsões</p>
                <div className="border border-zinc-100/50 mt-2"></div>
            </div>
            <ul className="w-full flex flex-col justify-evenly h-full">
                <li className="flex items-center justify-between p-2">
                    <img src={weatherIconDayOne} width={50} />
                    <span className="text-zinc-100">{Math.floor(weatherData.forecast.forecastday[0].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[0].day.mintemp_c)}°</span>
                    <span className="text-zinc-100 whitespace-nowrap text-center">
                        {formatarDataEHora(weatherData.forecast.forecastday[0].date)}
                    </span>
                </li>

                <li className="flex items-center justify-between p-2">
                    <img src={weatherIconDayTwo} width={50} />
                    <span className="text-zinc-100">{Math.floor(weatherData.forecast.forecastday[1].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[1].day.mintemp_c)}°</span>
                    <span className="text-zinc-100 whitespace-nowrap text-center">
                        {formatarDataEHora(weatherData.forecast.forecastday[1].date)}
                    </span>
                </li>

                <li className="flex items-center justify-between p-2">
                    <img src={weatherIconDayTheree} width={50} />
                    <span className="text-zinc-100">{Math.floor(weatherData.forecast.forecastday[2].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[2].day.mintemp_c)}°</span>
                    <span className="text-zinc-100 whitespace-nowrap text-center">
                        {formatarDataEHora(weatherData.forecast.forecastday[2].date)}
                    </span>
                </li>
            </ul>
        </div>
    )
}