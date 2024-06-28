import BarraLateral from "../componentes/reutilizavel/barra_lateral";
import Cabecalho from "../componentes/inf_clientes/cabecalho";
import Informacao from "../componentes/inf_clientes/informacao";
import Historico from "../componentes/inf_clientes/historico";
import Locais from "../componentes/inf_clientes/locais";

function inf_cliente() {
    return (
        <div className="flex2">
            <BarraLateral classe="barra_lateral2" icon="iconeUsers2" controle={true}/>

            <div className="flex_coluns">
                <div className="Page3">
                    <Cabecalho />
                </div>
                <div className="flex">
                    <div className="parte_inferior">
                        <Informacao />
                    </div>
                    <div className="Locais">
                        <Locais />
                    </div>
                </div>

                <div className="Historico">
                    <Historico />
                </div>
            </div>

        </div>
    )
}

export default inf_cliente;