/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Sunset from "../components/sunset";
import Sunrise from "../components/sunrise";
import UvIndex from "../components/uv-index";
import Humidity from "../components/humidity";
import Forecast from "../components/forecast";
import WindSpeed from "../components/wind-speed";
import FeelsLike from "../components/feels-like";
import SearchInput from "../components/search-input";
import LocationMap from "../components/location-map";
import { useWeather } from "../context/WeatherProvider";
import CurrentWeather from "../components/current-weather";
import WeatherPopularCities from "../components/weather-popular-cities";

export default function Home() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const { fetchWeather } = useWeather();

    useEffect(() => {
        if (latitude === 0 && longitude === 0) {
            fetchInitialWeather();
        } else {
            fetchWeather(latitude, longitude);
        }
    }, []);

    function fetchInitialWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    setLatitude(lat);
                    setLongitude(lon);
                    fetchWeather(lat, lon);
                },
                (error) => {
                    console.error("Erro ao obter a localização:", error.message);
                    const initialLat = -15.793899495216163;
                    const initialLon = -47.88274564270632;
                    setLatitude(initialLat);
                    setLongitude(initialLon);
                    fetchWeather(initialLat, initialLon);
                }
            );
        } else {
            console.error("Geolocalização não é suportada por este navegador.");
            const initialLat = -15.82686123202135;
            const initialLon = -47.92768564569077;
            setLatitude(initialLat);
            setLongitude(initialLon);
            fetchWeather(initialLat, initialLon);
        }
    }

    function handleSelectedCity(lat: number, lon: number) {
        setLatitude(lat);
        setLongitude(lon);
        fetchWeather(lat, lon);
    }

    return (
        <div className="pt-8 px-16 flex flex-col">
            <div className="grid grid-cols-9 gap-8">
                <div className="col-span-2">
                    <SearchInput onSelect={(lat, lon) => handleSelectedCity(lat, lon)} onViewOwnLocation={fetchInitialWeather} />
                </div>
            </div>
            <div className="mt-10 grid grid-cols-9 gap-8">
                <div className="col-span-2">
                    <CurrentWeather />
                </div>
                <div className="col-span-4">
                    <LocationMap cordx={latitude} cordy={longitude} />
                </div>
                <div className="col-span-3">
                    <WeatherPopularCities />
                </div>
            </div>
            <div className="grid grid-cols-9 my-8 gap-8">
                <div className="col-span-2">
                    <Forecast />
                </div>
                <div className="col-span-2 flex flex-col gap-8">
                    <Humidity />
                    <WindSpeed />
                </div>
                <div className="col-span-2 flex flex-col gap-8">
                    <FeelsLike />
                    <UvIndex />
                </div>
                <div className="col-span-3 flex flex-col gap-8">
                    <Sunrise />
                    <Sunset />
                </div>
            </div>
        </div>
    )
}