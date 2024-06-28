import Data from "../../mock/Mock.json";
import { useParams } from "react-router-dom"

function Cabecalho(){
    const { id } = useParams()
    const data = (Data.find(item => item.id === id));

    const inicias = (item: string) => {
        let sigla = "";
        sigla += item.charAt(0);
        sigla += item.charAt(item.indexOf(" ")+1);
        return sigla;
    }
    return (
        <div className="cabecalho">
            <p className="name_icon">{data && inicias(data.name)}</p>
            <div className="linha">
                <h1 className="nome_titulo">{data?.name ?? ''} | {data?.id ?? ''}</h1>
                <p className="add_trip" >Adicionar viagem</p>
            </div>
        </div>
    )
}

export default Cabecalho;