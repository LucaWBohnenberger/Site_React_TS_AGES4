import BarraLateral from "../componentes/reutilizavel/barra_lateral"
import ClienteBarra from "../componentes/lista_clientes/cliente_barra"
import HubClients from "../componentes/lista_clientes/hub_clients"

function ListaClientePages() {
    return (
        <div className="texto">
            <ClienteBarra nome="Luca Wolffenbuttel Bohnenberger" />
            <HubClients/>
            <BarraLateral/>
        </div>
    )
}

export default ListaClientePages