export function formatarData(dataStr: string): string {
    const [data, hora] = dataStr.split(" ");
    const [ano, mes, dia] = data.split("-");

    if(hora){
        return `${dia}/${mes}/${ano} ${hora}`;
    }else{
        return `${dia}/${mes}/${ano}`;
    }
}