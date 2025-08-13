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
        <div className="pt-8 pl-16 flex flex-col">
            <SearchInput />
            <div className="mt-10 flex gap-8">
                <CurrentWeather />
                <LocationMap cordx={-15.82686123202135} cordy={-47.92768564569077} />
                <WeatherPopularCities />
            </div>
            <div className="flex mt-5 mb-10 gap-8">
                <Forecast />
                <div className="grid grid-cols-2 gap-8">
                    <Humidity />
                    <WindSpeed />
                    <FeelsLike />
                </div>
            </div>
        </div>
    )
}