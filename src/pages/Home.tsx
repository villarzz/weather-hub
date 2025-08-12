import CurrentWeather from "../components/current-weather";
import SearchInput from "../components/search-input";


export default function Home() {
    return (
        <div className="pt-10 pl-12">
            <SearchInput />
            <div className="mt-16">
                <CurrentWeather />
            </div>
        </div>
    )
}