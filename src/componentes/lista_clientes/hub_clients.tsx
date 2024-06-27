import { FiMail } from "react-icons/fi";
//import { FiLock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Data from "../../mock/Mock.json";



function HubClients(){

    // Função para redirecionar para a página de detalhes do cliente
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCardClick = (item: any) => {
        window.location.href = `/lista/${item.id}`;
    }

    const inicias = (item: string) => {
        let sigla = "";
        sigla += item.charAt(0);
        sigla += item.charAt(item.indexOf(" ")+1);
        return sigla;
    }

    return (
        Data.map((item) => (
            <button type="button" className="clientes" onClick={() => handleCardClick(item)}>
                <div className="icon_cliente"> 
                    <p className="bk_transparente">{inicias(item.name)}</p>
                </div>
                <h3 className="nome_cliente">{item.name}</h3>

                <div className="inferior">
                    <div className="viagem_hud">
                        <p className="pv">Próxima viagem:</p>
                        <p className="prox_viagem">{item.firstTrip}</p>
                    </div>
                
                    <div className="caixa_mensal">
                        <p className="pr">Recorrência:</p>
                        <p className="recorrencia">{item.recurrence}</p>
                    </div>
                    <div className="zapmail">
                        <div className="mail">
                            <FiMail className="mail"/>
                            <p className="copiar_email">Copiar email</p>
                        </div>
                        <div className="zap" >
                            <FaWhatsapp className="zaps"/>
                            <p className="copiar_zap">WhatsApp</p>
                        </div>
                    </div>
                </div>
            </button>
            ))
        
    )
}

export default HubClients;