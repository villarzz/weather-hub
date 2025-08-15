import humidity from "../../public/assets/humidity.png";

export default function Humidity() {
    return (
        <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={humidity} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-xl font-semibold">Umidade do ar</p>
                    <p className="text-zinc-200/80">Alta</p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <p className="text-zinc-100 font-semibold text-center">
                    <span className="font-semibold text-7xl">63</span>
                    <span className="text-5xl">%</span>
                </p>
            </div>
        </div>
    )
}