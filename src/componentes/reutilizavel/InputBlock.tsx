import { IconType } from "react-icons";
//import { FiMail } from "react-icons/fi"; 


function InputBlock(props : {placeholder: string, titulo: string, icon?: IconType}){
    return (
        <div className="input_block">
            <p className="sub_titulo_tela_login">{props.titulo}</p>
            <input className="input_text" type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default InputBlock;