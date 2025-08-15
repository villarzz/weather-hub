/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import rainy from "../../public/assets/Rainy-Bulk.svg";
import snowy from "../../public/assets/Snowy-Bulk.svg";
import sunny from "../../public/assets/Sunny-Bulk.svg";
import { useWeather } from "../context/WeatherProvider";
import rainThunder from "../../public/assets/RainThunder-Bulk.svg";
import partlyCloudy from "../../public/assets/PartlyCloudy-Bulk.svg";

export default function WeatherPopularCities() {
    const { loading, nyWeather, rioWeather, tokyoWeather, parisWeather, londonWeather, fetchWeatherPopularCities } = useWeather();

    useEffect(() => {
        fetchWeatherPopularCities();
    }, [])


    if (loading || !nyWeather || !rioWeather || !tokyoWeather || !parisWeather || !londonWeather) {
        return (
            <div className="h-[400px] rounded-xl bg-sky-900/50 animate-pulse" />
        )
    }

    const conditionIcons: Record<string, string> = {
        "Parcialmente nublado": partlyCloudy,
        "Sol": sunny,
        "Rain": rainy,
        "Snowy": snowy,
        "RainThunder": rainThunder
    };
    const nyConditionText = nyWeather.current.condition.text;
    const rioConditionText = rioWeather.current.condition.text;
    const tokyoConditionText = tokyoWeather.current.condition.text;
    const parisWeatherConditionText = parisWeather.current.condition.text;
    const londonWeatherConditionText = londonWeather.current.condition.text;
    const nyWeatherIcon = conditionIcons[nyConditionText];
    const rioWeatherIcon = conditionIcons[rioConditionText];
    const tokyoWeatherIcon = conditionIcons[tokyoConditionText];
    const parisWeatherIcon = conditionIcons[parisWeatherConditionText];
    const londonWeatherIcon = conditionIcons[londonWeatherConditionText];

    return (
        <div className=" h-[400px] rounded-xl bg-sky-900/50 p-6">
            <p className="font-bold text-zinc-200 text-xl tracking-wide ml-1">Cidades Populares</p>
            <div className="border border-zinc-300 my-1"></div>
            <div className="overflow-x-auto ">
                <table className="table-auto border-collapse w-full">
                    <tbody>
                        <tr>
                            <td className="p-2"><img src={nyWeatherIcon} width={50} /></td>
                            <td className="text-zinc-100 p-2">Nova York</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">{nyWeather.current.condition.text}</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={parisWeatherIcon} width={50} /></td>
                            <td className="text-zinc-100 p-2">Paris</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">{parisWeather.current.condition.text}</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={tokyoWeatherIcon} width={50} /></td>
                            <td className="text-zinc-100 p-2">Tóquio</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">{tokyoWeather.current.condition.text}</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={londonWeatherIcon} width={50} /></td>
                            <td className="text-zinc-100 p-2">Londres</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">{londonWeather.current.condition.text}</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={rioWeatherIcon} width={50} /></td>
                            <td className="text-zinc-100 p-2">Rio de Janeiro</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">{rioWeather.current.condition.text}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}