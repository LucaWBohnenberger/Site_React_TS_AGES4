import InputBlock from "../reutilizavel/InputBlock";
import InputSubmit from "../reutilizavel/InputSubmit"; 
 

function Hud(){
    return (
        <div className="hud_login"> 
            <h1 className="titulo_login">Bem Vindo</h1>
            <InputBlock placeholder="Digite seu email" titulo="Email: " />
            <InputBlock placeholder={"Digite sua senha"} titulo="Senha: " />
            <InputSubmit text="Login" />
        </div>
    )
}

export default Hud;