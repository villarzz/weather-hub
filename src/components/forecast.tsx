import Rainy from "../../public/assets/Rainy-Bulk.svg";
import Snowy from "../../public/assets/Snowy-Bulk.svg";
import Sunny from "../../public/assets/Sunny-Bulk.svg";
import { useWeather } from "../context/WeatherProvider";
import RainThunder from "../../public/assets/RainThunder-Bulk.svg";
import PartlyCloudy from "../../public/assets/PartlyCloudy-Bulk.svg";
import { formatarDataEHora } from "../utils/utils";

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
    const conditionTextDayFour = weatherData.forecast.forecastday[3].day.condition.text;
    const conditionTextDayFive = weatherData.forecast.forecastday[4].day.condition.text;
    const weatherIconDayOne = conditionIcons[conditionTextDayOne];
    const weatherIconDayTwo = conditionIcons[conditionTextDayTwo];
    const weatherIconDayTheree = conditionIcons[conditionTextDayTheree];
    const weatherIconDayFour = conditionIcons[conditionTextDayFour];
    const weatherIconDayFive = conditionIcons[conditionTextDayFive];

    return (
        <div className="h-[450px] rounded-xl bg-sky-900/50 p-5 flex flex-col">
            <div className="mb-5">
                <p className="text-zinc-100 text-lg font-semibold">Previsões</p>
                <div className="border border-zinc-300 mt-2"></div>
            </div>
            <table className="table-auto border-collapse w-full">
                <tbody>
                    <tr>
                        <td className="p-2"><img src={weatherIconDayOne} width={50} /></td>
                        <td className="text-zinc-100 p-2">{Math.floor(weatherData.forecast.forecastday[0].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[0].day.mintemp_c)}°</td>
                        <td className="text-zinc-100 p-2 whitespace-nowrap text-center">{formatarDataEHora(weatherData.forecast.forecastday[0].date)}</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={weatherIconDayTwo} width={50} /></td>
                        <td className="text-zinc-100 p-2">{Math.floor(weatherData.forecast.forecastday[1].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[1].day.mintemp_c)}°</td>
                        <td className="text-zinc-100 p-2 whitespace-nowrap text-center">{formatarDataEHora(weatherData.forecast.forecastday[1].date)}</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={weatherIconDayTheree} width={50} /></td>
                        <td className="text-zinc-100 p-2">{Math.floor(weatherData.forecast.forecastday[2].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[2].day.mintemp_c)}°</td>
                        <td className="text-zinc-100 p-2 whitespace-nowrap text-center">{formatarDataEHora(weatherData.forecast.forecastday[2].date)}</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={weatherIconDayFour} width={50} /></td>
                        <td className="text-zinc-100 p-2">{Math.floor(weatherData.forecast.forecastday[3].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[3].day.mintemp_c)}°</td>
                        <td className="text-zinc-100 p-2 whitespace-nowrap text-center">{formatarDataEHora(weatherData.forecast.forecastday[3].date)}</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={weatherIconDayFive} width={50} /></td>
                        <td className="text-zinc-100 p-2">{Math.floor(weatherData.forecast.forecastday[4].day.maxtemp_c)}°/{Math.floor(weatherData.forecast.forecastday[4].day.mintemp_c)}°</td>
                        <td className="text-zinc-100 p-2 whitespace-nowrap text-center">{formatarDataEHora(weatherData.forecast.forecastday[4].date)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}