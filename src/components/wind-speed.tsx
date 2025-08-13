import windSpeed from "../assets/storm.png";

export default function WindSpeed() {
    return (
        <div className="w-[334px] h-[225px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={windSpeed} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-xl font-semibold whitespace-nowrap">Velocidade do vento</p>
                    <p className="text-zinc-200/80">Fraco</p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <p className="text-zinc-100 font-semibold text-center">
                    <span className="font-semibold text-7xl">12</span>
                    <span className="text-5xl">km/h</span>
                </p>
            </div>
        </div>
    )
}