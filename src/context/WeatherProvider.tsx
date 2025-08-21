/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useState, useContext } from "react";
import type { WeatherData } from "../interfaces/WeatherData";

interface WeatherContextType {
    loading: boolean;
    error: string | null;
    nyWeather: WeatherData | null;
    rioWeather: WeatherData | null;
    weatherData: WeatherData | null;
    tokyoWeather: WeatherData | null;
    parisWeather: WeatherData | null;
    londonWeather: WeatherData | null;
    fetchWeatherPopularCities: () => Promise<void>;
    fetchWeather: (lat: number, lon: number) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);
const apiKey = import.meta.env.VITE_API_KEY;

interface WeatherProviderProps {
    children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [nyWeather, setNyWeather] = useState<WeatherData | null>(null);
    const [rioWeather, setRioWeather] = useState<WeatherData | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [parisWeather, setParisWeather] = useState<WeatherData | null>(null);
    const [tokyoWeather, setTokyoWeather] = useState<WeatherData | null>(null);
    const [londonWeather, setLondonWeather] = useState<WeatherData | null>(null);


    // Função que fará as requisições
    const fetchWeather = async (lat: number, lon: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5&aqi=no&alerts=no&lang=pt`);

            if (!response.ok) {
                throw new Error('Falha ao buscar dados do tempo.');
            }

            const completeWeatherData: WeatherData = await response.json();

            setWeatherData(completeWeatherData);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherPopularCities = async () => {
        setLoading(true);
        setError(null);

        // Lista de cidades
        const cities = [
            { name: "Nova York", setter: setNyWeather },
            { name: "Paris", setter: setParisWeather },
            { name: "Tóquio", setter: setTokyoWeather },
            { name: "Londres", setter: setLondonWeather },
            { name: "Rio de Janeiro", setter: setRioWeather }
        ];

        try {
            await Promise.all(
                cities.map(async ({ name, setter }) => {
                    const response = await fetch(
                        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}&lang=pt`
                    );

                    if (!response.ok) {
                        throw new Error(`Falha ao buscar dados do tempo para ${name}`);
                    }

                    const completeWeatherData: WeatherData = await response.json();
                    setter(completeWeatherData);
                })
            );
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        error,
        loading,
        nyWeather,
        rioWeather,
        weatherData,
        tokyoWeather,
        parisWeather,
        fetchWeather,
        londonWeather,
        fetchWeatherPopularCities,
    };

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather deve ser usado dentro de um WeatherProvider');
    }
    return context;
};