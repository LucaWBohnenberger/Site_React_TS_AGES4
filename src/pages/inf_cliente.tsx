import BarraLateral from "../componentes/reutilizavel/barra_lateral";
import Cabecalho from "../componentes/inf_clientes/cabecalho";

function inf_cliente(){
    return (
        <div className="flex">
            <BarraLateral classe="barra_lateral2" icon="iconeUsers2"/>
            <div className="Page3">
                <Cabecalho/>
            </div>
        </div>
        
    )
}7

export default inf_cliente;