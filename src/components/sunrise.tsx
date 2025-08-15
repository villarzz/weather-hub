import sunrise from "../../public/assets/sunrise.png";

export default function Sunrise() {
    return (
        <div className="h-[209px] rounded-xl bg-sky-900/50 p-5 flex flex-col items-start space-x-4">
            <div className="flex gap-5 items-center">
                <img src={sunrise} alt="Ícone de umidade" className="w-16 h-16 flex-shrink-0" />
                <span>
                    <p className="text-zinc-100 text-2xl font-semibold whitespace-nowrap">Nascer do sol</p>
                    <p className="text-zinc-100">14/08/2025</p>
                </span>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-col text-center">
                    <div className="flex">
                        <p className="text-7xl font-semibold text-zinc-100 leading-none">
                            6:29
                            <span className="text-3xl"> AM</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}