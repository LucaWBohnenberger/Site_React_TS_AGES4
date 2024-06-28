function InfBlock(props : {inf: string, titulo: string}){
    return (
        <div className="inf_block">
            <p className="dados_tipo">{props.titulo}</p>
            <input className="dados" type="text" placeholder={props.inf} />
        </div>
    )
}

export default InfBlock