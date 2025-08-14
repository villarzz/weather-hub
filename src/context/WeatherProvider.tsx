/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useState, useContext } from "react";
import type { WeatherData } from "../interfaces/WeatherData";

interface WeatherContextType {
    weatherData: WeatherData | null;
    loading: boolean;
    error: string | null;
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
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    // Função que fará as requisições
    const fetchWeather = async (lat: number, lon: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5&aqi=no&alerts=no&lang=pt`);

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

    const value = {
        weatherData,
        loading,
        error,
        fetchWeather,
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