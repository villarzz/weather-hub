import rainy from "../assets/Rainy-Bulk.svg";
import snowy from "../assets/Snowy-Bulk.svg";
import sunny from "../assets/Sunny-Bulk.svg";
import rainThunder from "../assets/RainThunder-Bulk.svg";
import partlyCloudy from "../assets/PartlyCloudy-Bulk.svg";

export default function WeatherPopularCities() {
    return (
        <div className=" h-[400px] rounded-xl bg-sky-900/50 p-6">
            <p className="font-bold text-zinc-200 text-xl tracking-wide ml-1">Cidades Populares</p>
            <div className="border border-zinc-300 my-1"></div>
            <div className="overflow-x-auto ">
                <table className="table-auto border-collapse w-full">
                    <tbody>
                        <tr>
                            <td className="p-2"><img src={partlyCloudy} width={50} /></td>
                            <td className="text-zinc-100 p-2">Nova York</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">Parcialmente Nublado</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={rainThunder} width={50} /></td>
                            <td className="text-zinc-100 p-2">Paris</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">Chuva forte</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={rainy} width={50} /></td>
                            <td className="text-zinc-100 p-2">Tóquio</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">Chuva</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={snowy} width={50} /></td>
                            <td className="text-zinc-100 p-2">Londres</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">Neve</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-100 p-2"><img src={sunny} width={50} /></td>
                            <td className="text-zinc-100 p-2">Rio de Janeiro</td>
                            <td className="text-zinc-100 text-sm p-2 whitespace-nowrap text-right">Ensolarado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}