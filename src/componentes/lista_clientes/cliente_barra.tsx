function ClienteBarra(props: {nome: string}){
    return (
        <div className="cliente_barra">
            <h2>{props.nome}</h2>
            <div className="client_bar">
                <h3 className="titulo_cliente">Cliente</h3> 
                <input type="text" className="input_client" placeholder="Search"/>
            </div>
            
        </div>
    )
}

export default ClienteBarra;