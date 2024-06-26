import BarraLateral from "../componentes/reutilizavel/barra_lateral";
import Cabecalho from "../componentes/inf_clientes/cabecalho";

function inf_cliente(){
    return (
        <div className="flex">
            <BarraLateral classe="barra_lateral2" icon="iconeUsers2"/>
            <Cabecalho/>
        </div>
    )
}7

export default inf_cliente;