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
            <div className="h-[400px] rounded-xl bg-sky-900/50 animate-pulse p-6" />
        )
    }

    const conditionIcons: Record<string, string> = {
        "Parcialmente nublado": partlyCloudy,
        "Possibilidade de chuva irregular": partlyCloudy,
        "Encoberto": partlyCloudy,
        "Sol": sunny,
        "Céu limpo": sunny,
        "Rain": rainy,
        "Chuva moderada ou forte com trovoada": rainy,
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
        <div className="h-[400px] rounded-xl bg-sky-900/50 p-6">
            <p className="font-bold text-zinc-200 text-xl tracking-wide ml-1">Cidades Populares</p>
            <div className="border border-zinc-100/50 my-1"></div>
            <div className="overflow-x-auto h-full">
                <ul className="divide-y divide-zinc-100/20 h-5/6 flex flex-col justify-evenly">
                    <li className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-3">
                            <img
                                src={nyWeatherIcon}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                                alt="Clima Nova York"
                            />
                            <span className="text-zinc-100">Nova York</span>
                        </div>
                        <span className="text-zinc-100 text-sm truncate text-right">
                            {nyWeather.current.condition.text}
                        </span>
                    </li>

                    <li className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-3">
                            <img
                                src={parisWeatherIcon}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                                alt="Clima Paris"
                            />
                            <span className="text-zinc-100">Paris</span>
                        </div>
                        <span className="text-zinc-100 text-sm truncate text-right">
                            {parisWeather.current.condition.text}
                        </span>
                    </li>

                    <li className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-3">
                            <img
                                src={tokyoWeatherIcon}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                                alt="Clima Tóquio"
                            />
                            <span className="text-zinc-100">Tóquio</span>
                        </div>
                        <span className="text-zinc-100 text-sm truncate text-right">
                            {tokyoWeather.current.condition.text}
                        </span>
                    </li>

                    <li className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-3">
                            <img
                                src={londonWeatherIcon}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                                alt="Clima Londres"
                            />
                            <span className="text-zinc-100">Londres</span>
                        </div>
                        <span className="text-zinc-100 text-sm truncate text-right">
                            {londonWeather.current.condition.text}
                        </span>
                    </li>

                    <li className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-3">
                            <img
                                src={rioWeatherIcon}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                                alt="Clima Rio de Janeiro"
                            />
                            <span className="text-zinc-100">Rio de Janeiro</span>
                        </div>
                        <span className="text-zinc-100 text-sm truncate text-right">
                            {rioWeather.current.condition.text}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}