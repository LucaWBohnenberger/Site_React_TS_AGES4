import Logo from "../../../img/Logo.svg";
import { FiUsers } from "react-icons/fi";

function BarraLateral( item: {classe: string, icon: string, controle: boolean}) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const voltar = (item: boolean) => {
    if (item || null || undefined){
      window.location.href = `/lista`;
    }else{
      window.location.href = `/`
    }
    
}

  return (
    <div className={item.classe}>
      <img src={Logo} alt="Logo" className="Logo"/>
      <div className="iconeRoxo" onClick={() => voltar(item.controle)}>
        <FiUsers className={item.icon}/>
      </div>
    </div>
  );
}

export default BarraLateral;