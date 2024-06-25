import { FiMail } from "react-icons/fi";
//import { FiLock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function HubClients(){
    return (
        <div className="clientes">
            <div className="icon_cliente"> 
                <p className="bk_transparente">RE </p>
            </div>
            <h3 className="nome_cliente">Roberto Elias</h3>
            <div>
                <p className="pv">Próxima viagem:</p>
                <p className="prox_viagem">11/01/2004</p>
            </div>
            <div className="caixa_mensal">
                <p className="pr">Recorrência:</p>
                <p className="recorrencia">Mensal</p>
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
    )
}

export default HubClients;