import thermometer from "../../public/assets/atmospheric-conditions.png"

export default function FeelsLike() {
    return (
        <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={thermometer} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-xl font-semibold whitespace-nowrap">Sensação Térmica</p>
                    <p className="text-zinc-200/80">Normal</p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-col text-center">
                    <div className="flex">
                        <p className="text-7xl font-semibold text-zinc-100 leading-none">19</p>
                        <span className="text-zinc-100 text-2xl font-semibold ml-1 mt-1">°C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}