import BarraLateral from "../componentes/reutilizavel/barra_lateral"
import ClienteBarra from "../componentes/lista_clientes/cliente_barra"
import HubClients from "../componentes/lista_clientes/hub_clients"

function ListaClientePages() {
    return (
        <div className="texto">
            <BarraLateral classe="barra_lateral" icon="iconeUsers" controle={false} />
            <div className="main">
                <ClienteBarra nome="Luca Wolffenbuttel Bohnenberger" />
                <div className="clients_grid">
                    <HubClients/>
                </div>
            </div>
        </div>
    )
}

export default ListaClientePages