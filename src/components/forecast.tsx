import rainy from "../assets/Rainy-Bulk.svg";
import snowy from "../assets/Snowy-Bulk.svg";
import sunny from "../assets/Sunny-Bulk.svg";
import rainThunder from "../assets/RainThunder-Bulk.svg";
import partlyCloudy from "../assets/PartlyCloudy-Bulk.svg";

export default function Forecast() {
    return (
        <div className="h-[450px] rounded-xl bg-sky-900/50 p-5 flex flex-col">
            <div className="mb-5">
                <p className="text-zinc-100 text-lg font-semibold">Previsões</p>
                <div className="border border-zinc-300 mt-2"></div>
            </div>
            <table className="table-auto border-collapse w-full">
                <tbody>
                    <tr>
                        <td className="p-2"><img src={partlyCloudy} width={50} /></td>
                        <td className="text-zinc-100 p-2">24°/22°</td>
                        <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-center"><span className="font-bold">12</span> Jul, Ter</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={rainThunder} width={50} /></td>
                        <td className="text-zinc-100 p-2">24°/22°</td>
                        <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-center"><span className="font-bold">13</span> Jul, Qua</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={rainy} width={50} /></td>
                        <td className="text-zinc-100 p-2">24°/22°</td>
                        <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-center"><span className="font-bold">14</span> Jul, Qui</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={snowy} width={50} /></td>
                        <td className="text-zinc-100 p-2">24°/22°</td>
                        <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-center"><span className="font-bold">15</span> Jul, Sex</td>
                    </tr>
                    <tr>
                        <td className="text-zinc-100 p-2"><img src={sunny} width={50} /></td>
                        <td className="text-zinc-100 p-2">24°/22°</td>
                        <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-center"><span className="font-bold">16</span> Jul, Sab</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}