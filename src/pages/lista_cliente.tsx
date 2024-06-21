import BarraLateral from "../componentes/reutilizavel/barra_lateral"
import ClienteBarra from "../componentes/lista_clientes/cliente_barra"

function ListaClientePages() {
    return (
        <div className="texto">
            <ClienteBarra nome="Luca Wolffenbuttel Bohnenberger" />
            <BarraLateral/>
        </div>
    )
}

export default ListaClientePages