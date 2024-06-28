import InfBlock from "../inf_clientes/inf_block"
import { useParams } from "react-router-dom"
import Data from "../../mock/Mock.json"

function Informacao() {
    const { id } = useParams()
    const data = (Data.find(item => item.id === id));
    return (
        <div>
            <h2 className="titulo_inf">Informação do cliente</h2>
            <div className="flex3">
                <div className="flex1">
                    <InfBlock inf={data?.birthDate || ""} titulo="Data de Nascimento" />
                    <InfBlock inf={data?.email || ""} titulo="Endereço de email" />
                    <InfBlock inf={data?.job || ""} titulo="Ocupação" />
                    <InfBlock inf={data?.firstTrip || ""} titulo="Primeira viagem" />
                </div>
                <div className="flex1">
                    <InfBlock inf={data?.phone || ""} titulo="Telefone" />
                    <InfBlock inf={data?.cpf || ""} titulo="CPF" />
                    <InfBlock inf={data?.origin || ""} titulo="Origem"/>
                    <InfBlock inf={data?.recurrence || ""} titulo="Recorrência" />
                </div>
            </div>


        </div>
    )
}

export default Informacao