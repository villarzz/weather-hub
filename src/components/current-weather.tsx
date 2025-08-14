import { LuWind } from "react-icons/lu";
import icon from "../assets/PartlyCloudy.svg";
import { IoWaterOutline } from "react-icons/io5";

export default function CurrentWeather() {
    return (
        <div className="h-[400px] rounded-xl bg-sky-900/50 flex flex-col justify-evenly">
            <div className="pl-4">
                <p className="font-bold text-zinc-200 text-xl tracking-wide">Clima Atual</p>
                <p className="text-zinc-200">2:14 PM</p>
            </div>
            <div className="flex items-centers gap-9">
                <img src={icon} alt="" width={150}  className="ml-2"/>
                <div className="flex flex-col text-center">
                    <div className="flex">
                        <p className="text-8xl font-semibold text-zinc-100 leading-none">24</p>
                        <span className="text-zinc-100 text-2xl font-semibold ml-1 mt-1">°C</span>
                    </div>
                    <p className="font-semibold text-zinc-100">Ensolarado</p>
                </div>
            </div>
            <div className="mx-3 flex justify-around p-2">
                <div className="flex flex-col items-center gap-1">
                    <IoWaterOutline className="text-zinc-200 text-3xl" />
                    <p className="text-white">30%</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <LuWind className="text-zinc-200 text-3xl" />
                    <p className="text-white">6 km/h</p>
                </div>
            </div>
        </div>
    )
}