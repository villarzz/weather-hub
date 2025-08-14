import Sunset from "../components/sunset";
import Sunrise from "../components/sunrise";
import UvIndex from "../components/uv-index";
import Humidity from "../components/humidity";
import Forecast from "../components/forecast";
import WindSpeed from "../components/wind-speed";
import FeelsLike from "../components/feels-like";
import SearchInput from "../components/search-input";
import LocationMap from "../components/location-map";
import CurrentWeather from "../components/current-weather";
import WeatherPopularCities from "../components/weather-popular-cities";

export default function Home() {
    return (
        <div className="pt-8 px-16 flex flex-col">
            <SearchInput />
            <div className="mt-10 grid grid-cols-9 gap-8">
                <div className="col-span-2">
                    <CurrentWeather />
                </div>
                <div className="col-span-4">
                    <LocationMap cordx={-15.82686123202135} cordy={-47.92768564569077} />
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