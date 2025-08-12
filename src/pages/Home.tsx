
import SearchInput from "../components/search-input";
import LocationMap from "../components/location-map";

import CurrentWeather from "../components/current-weather";
import WeatherPopularCities from "../components/weather-popular-cities";


export default function Home() {
    return (
        <div className="pt-12 pl-16">
            <SearchInput />
            <div className="mt-16 flex gap-10">
                <CurrentWeather />
                <LocationMap cordx={-15.82686123202135} cordy={-47.92768564569077} />
                <WeatherPopularCities />
            </div>
        </div>
    )
}